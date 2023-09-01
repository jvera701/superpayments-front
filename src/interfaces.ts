export interface Rest {
  status: string;
  apps: App[];
  user: User;
}

export interface ModuleInfo {
  modules: Module[];
}

export type Response = Rest & ModuleInfo;

export interface User {
  customerName: string;
  activePayments: boolean;
  address: string;
  blocked: boolean;
  canRequest: boolean;
  cellphone: string;
  debt: number;
  email: string;
  id: number;
  lastName: string;
  moActive: boolean;
  moBalance: number;
  name: string;
  needConfirmation: boolean;
  needToken: boolean;
  needUpdate: boolean;
  oPB: boolean;
  posBalance: number;
  preBalance: number;
  pseStatus: string;
  realCellphone: string;
  resetPass: boolean;
  tip: number;
  tmpBalance: number;
  token: string;
  username: string;
  userType: number;
  useSecondPassword: boolean;
  Rol: Rol;
  typePerson: string;
  contactCellphone: string;
  checkDataTreatment: boolean;
}

interface Rol {
  name: string;
  permissions: string[];
}

interface App {
  id: number;
  name: string;
  active: boolean;
}

export interface Module {
  id: number;
  categories: Category[];
  name: string;
}

export interface Category {
  name: string;
  description: string;
  id: number;
  internalName: string;
  image: string;
  needValidation: boolean;
  subCategories?: Category[];
  products?: Product[];
}

export interface Product {
  id: number;
  name: string;
  internalName?: string;
  amount?: number;
  image?: string;
  description?: string;
  needValidation: boolean;
}
