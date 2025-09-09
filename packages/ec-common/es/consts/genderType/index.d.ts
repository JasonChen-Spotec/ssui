/** 男 */
declare const MALE: 1;
/** 女 */
declare const FEMALE: 2;
/** 空 */
declare const EMPTY: -1;
export { MALE, FEMALE, EMPTY };
export type SexType = 1 | 2;
export declare const useGenderType: () => {
    genderTypeMap: {
        1: string;
        2: string;
        [-1]: string;
    };
    genderTypeList: ({
        value: 1;
        label: string;
    } | {
        value: 2;
        label: string;
    })[];
    appellativeGenderTypeMap: {
        1: string;
        2: string;
        [-1]: string;
    };
};
