import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((obj: Question): boolean => obj.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (obj: Question): boolean =>
            obj.body !== "" || obj.expected !== "" || obj.options.length !== 0,
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    let ret = questions.filter((ne: Question): boolean => ne.id === id);
    if (ret.length !== 0) {
        return ret[0];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((ne: Question): boolean => ne.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((ne: Question): string => ne.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (ret: number, var1: Question) => (ret += var1.points),
        0,
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions.reduce(
        (ret: number, var1: Question) =>
            var1.published ? (ret += var1.points) : ret,
        0,
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let ret = questions.reduce(
        (str: string, var1: Question) =>
            (str +=
                "\n" +
                var1.id +
                "," +
                var1.name +
                "," +
                var1.options.length +
                "," +
                var1.points +
                "," +
                var1.published),
        "",
    );
    return "id,name,options,points,published" + ret;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let ret = questions.map(
        (var1: Question): Answer => ({
            questionId: var1.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return ret;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (var1: Question): Question => ({ ...var1, published: true }),
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    return questions.reduce(
        (ret: boolean, var1: Question) =>
            var1.type === questions[0].type ? ret : (ret = false),
        true,
    );
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let newQuest = makeBlankQuestion(id, name, type);
    return [...questions, newQuest];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map(
        (var1: Question): Question =>
            targetId === var1.id ?
                {
                    ...var1,
                    name: newName,
                }
            :   {
                    ...var1,
                },
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    if (newQuestionType === "multiple_choice_question") {
        return questions.map(
            (var1: Question): Question =>
                targetId === var1.id ?
                    {
                        ...var1,
                        type: newQuestionType,
                    }
                :   {
                        ...var1,
                    },
        );
    } else {
        return questions.map(
            (var1: Question): Question =>
                targetId === var1.id ?
                    {
                        ...var1,
                        type: newQuestionType,
                        options: [],
                    }
                :   {
                        ...var1,
                    },
        );
    }
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let ret = questions.reduce(
        (opt: string[], var2: Question) =>
            targetId === var2.id ? [...var2.options] : opt,
        [],
    );
    if (targetOptionIndex === -1) {
        return questions.map(
            (var1: Question): Question =>
                targetId === var1.id ?
                    {
                        ...var1,
                        options: ret.splice(var1.options.length, 0, newOption),
                    }
                :   {
                        ...var1,
                    },
        );
    } else {
        return questions.map(
            (var1: Question): Question =>
                targetId === var1.id ?
                    {
                        ...var1,
                        options: ret.splice(targetOptionIndex, 1, newOption),
                    }
                :   {
                        ...var1,
                    },
        );
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    return questions.map(
        (var1: Question): Question =>
            targetId === var1.id ?
                {
                    ...var1,
                    id: newId,
                }
            :   {
                    ...var1,
                },
    );
}
