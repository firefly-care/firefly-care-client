import type { SeniorResponseType, LedStateType } from "@/apis/senior/types";
import type { SeniorItemType } from "@pages/senior/types";
import type { SignType } from "@/types/sign";
import { KOR_TO_SIGN } from "@/constants/sign";

const LED_ORDER = ["안방", "거실", "주방", "화장실"] as const;
type LedRoom = (typeof LED_ORDER)[number];

export class SeniorAdapter {
  private value: SeniorResponseType;

  constructor(obj: SeniorResponseType) {
    this.value = obj;
  }

  private get ledTuple(): SeniorItemType["led"] {
    const map = new Map<LedRoom, boolean>();
    (this.value.ledStates ?? []).forEach((s: LedStateType) => {
      if (LED_ORDER.includes(s.sensorGbn as LedRoom)) {
        map.set(s.sensorGbn as LedRoom, !!s.isOn);
      }
    });

    return [
      map.get("안방") ?? false,
      map.get("거실") ?? false,
      map.get("주방") ?? false,
      map.get("화장실") ?? false,
    ];
  }

  private get anomaly(): SignType {
    return KOR_TO_SIGN[this.value.seniorState?.state];
  }

  private get lastActive(): number {
    const ts = this.value.seniorState?.lastActTime;
    return ts;
  }

  // === 최종 변환 ===
  adapt(): SeniorItemType {
    return {
      name: this.value.name,
      birth: this.value.birthday,
      contact: this.value.phoneNum,
      eupmyeondong: this.value.town,
      address: this.value.address,
      manager: this.value.managerName,
      managerContact: this.value.managerPhoneNum,
      led: this.ledTuple,
      lastActive: this.lastActive,
      anomaly: this.anomaly,
    };
  }

  static adaptList(list: SeniorResponseType[]): SeniorItemType[] {
    return list.map((dto) => new SeniorAdapter(dto).adapt());
  }
}
