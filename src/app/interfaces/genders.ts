export enum Genders {
  MALE = 1,
  FEMALE = 2,
  UNKNOWN = 3,
}

export const GenderLabels: Record<Genders, string> = {
  [Genders.MALE]: 'Macho',
  [Genders.FEMALE]: 'Hembra',
  [Genders.UNKNOWN]: 'Desconocido',
};
