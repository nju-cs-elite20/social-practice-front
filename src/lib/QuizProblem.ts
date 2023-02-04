export class QuizProblemWithAnswer {

    private _problem_text : string;
    public get problem_text() : string {
        return this._problem_text;
    }
    public set problem_text(v : string) {
        this._problem_text = v;
    }

    private _problem_options : string[];
    public get problem_options() : string[] {
        return this._problem_options;
    }
    public set problem_options(v : string[]) {
        this._problem_options = v;
    }
    
    private _user_answer? : number;
    public get user_answer() : number {
        return this._user_answer;
    }
    public set user_answer(v : number) {
        this._user_answer = v;
    }

    constructor(public quizProblem: QuizProblem) {
        this.problem_text = quizProblem.problem_text;
        this.problem_options = quizProblem.problem_options;
    }
}

export class QuizProblemWithReference extends QuizProblemWithAnswer {

    private _reference : number;
    public get reference() : number {
        return this._reference;
    }
    public set reference(v : number) {
        this._reference = v;
    }

    public get is_correct() : boolean {
        return this.user_answer === this.reference;
    }

    constructor(public quizProblem: QuizProblemWithAnswer, public ref: number) {
        super(quizProblem);
        super.user_answer = quizProblem.user_answer;
        this.reference = ref;
    }
}

export interface QuizProblem {
    problem_text: string;
    problem_options: string[];
}