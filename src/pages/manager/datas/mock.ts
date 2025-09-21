import type { CareRecipient, ManagerType } from "../types";

const RECIPIENT_SAMPLE: CareRecipient = {
  id: "r-0",
  name: "이정선",
  gender: "남",
  age: "만 68세",
  address: "인천광역시 부평구 장제로 150 A-507호",
};

export const userStatusItems: CareRecipient[] = [
  { id: "r-1",  name: "이정선", gender: "남", age: "만 68세", address: "인천광역시 부평구 장제로 150 A-507호" },
  { id: "r-2",  name: "이정선", gender: "남", age: "만 68세", address: "인천광역시 부평구 장제로 150 A-507호" },
  { id: "r-3",  name: "이정선", gender: "남", age: "만 68세", address: "인천광역시 부평구 장제로 150 A-507호" },
  { id: "r-4",  name: "이정선", gender: "남", age: "만 68세", address: "인천광역시 부평구 장제로 150 A-507호" },
  { id: "r-5",  name: "이정선", gender: "남", age: "만 68세", address: "인천광역시 부평구 장제로 150 A-507호" },
  { id: "r-6",  name: "이정선", gender: "남", age: "만 68세", address: "인천광역시 부평구 장제로 150 A-507호" },
  { id: "r-7",  name: "이정선", gender: "남", age: "만 68세", address: "인천광역시 부평구 장제로 150 A-507호" },
  { id: "r-8",  name: "이정선", gender: "남", age: "만 68세", address: "인천광역시 부평구 장제로 150 A-507호" },
  { id: "r-9",  name: "이정선", gender: "남", age: "만 68세", address: "인천광역시 부평구 장제로 150 A-507호" },
  { id: "r-10", name: "이정선", gender: "남", age: "만 68세", address: "인천광역시 부평구 장제로 150 A-507호" },
];

const makeManager = (idx: number): ManagerType => ({
  id: `m-${idx}`,
  name: "OOO 담당자",
  todayCalls: Math.floor(Math.random() * 5),
  specialCount: Math.floor(Math.random() * 3),
  lastCallAgo: "N시간 전",
  recipients: Array.from({ length: 10 }, (_, i) => ({
    ...RECIPIENT_SAMPLE,
    id: `r-${idx}-${i}`,
  })),
});

export const MANAGERS: ManagerType[] = Array.from({ length: 12 }, (_, i) =>
  makeManager(i + 1)
);
