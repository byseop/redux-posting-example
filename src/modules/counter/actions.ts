// 액션
export const INCREASE = 'counter/INCREASE' as const;
export const DECREASE = 'counter/DECREASE' as const;
export const INCREASE_ASYNC = 'counter/INCREASE_ASYNC' as const;
export const DECREASE_ASYNC = 'counter/DECREASE_ASYNC' as const;

// 액션 생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// 액션객체 타입
export type CounterActionType =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseAsync>
  | ReturnType<typeof decreaseAsync>;
