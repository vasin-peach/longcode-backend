import multiprocessing as thread

class Code:
    def __init__(self, problemName):
        #------------------------------------#
        v = {}
        exec(open('{}.py'.format(problemName)).read(), None, v)
        # print(v)
        for name, value in v.items():
            setattr(self, name, value)
        #------------------------------------#
        # print(locals())
        self.timeLimit = 1
        self.name = problemName
        self.path = 'problem/' + self.name
        # print(self.path)
        self.length = self.get_info()
        self.input, self.expected = self.get_testcase()


    def get_info(self): # get length of testcase
        '''
            -----format info.txt-----
            first: number of testcase
            second: timelimit
            -------------------------
        '''
        tmp = open(self.path+'/info.txt').read()
        tmp = [int(v.strip()) for v in tmp.split()]
        # TIME, LENGTH = tmp[1], tmp[0]
        return tmp[0]

    def get_testcase(self):# get testcase
        L = self.length
        INPUT, EXPECTED = [], []
        for case in range(1, L+1):
            tmpIN = open(self.path + '/input{}.txt'.format(case)).read()
            tmpOUT = open(self.path + '/out{}.txt'.format(case)).read()
            INPUT.append([v.strip() for v in tmpIN.split()])
            EXPECTED.append([v.strip() for v in tmpOUT.split()])
        return INPUT, EXPECTED

    def _run(self, INPUT, EXPECTED, case):
        func = 'self.' + self.name
        # print(INPUT)
        b = '(' + ', '.join(INPUT) + ')'
        # print(func+b)
        try:
            OUT = eval(func+b)
            if OUT == EXPECTED:
                print('case%d: Passed' % (case+1))
            else:
                print('case%d: Wrong Answer' % (case+1))
        except Exception as e:
            print('case%d: %s' % (case+1, e))

    def run(self):
        # sent = {}
        for case in range(len(self.input)):
            # sent[case] = False
            T = thread.Process(target = self._run, args = (self.input[case], *self.expected[case], case))
            T.start()
            T.join(self.timeLimit)
            if T.is_alive():
                print('case%d: Timeout' % (case+1))
                T.terminate()
                T.join()
    def test(self):
        print(self.add(1, 2, 3))
        

A = Code('add')
A.run()
