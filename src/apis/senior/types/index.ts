export type SeniorResponseType = {
  name: string;
  birthday: string;
  phoneNum: string;
  town: string;
  address: string;
  managerName: string;
  managerPhoneNum: string;
  seniorState: SeniorStateType;
  ledStates: LedStateType[];
};

export type SeniorStateType = {
  lastActTime: number;
  state: string;
};

export type LedStateType = {
  sensorGbn: "안방" | "거실" | "화장실" | "주방";
  isOn: boolean;
};
