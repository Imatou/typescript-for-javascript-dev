type Pitcher1 = {
  throwingSpeed: number;

}

type Batter1 = {
  battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
}
const Ochiai: Batter1 = {
  battingAverage: 0.357
}

type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.30
}