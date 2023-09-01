import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import type { RootState } from "../store/store";
import CustomButton from "../components/CustomButton";
import type { Module, Category } from "../interfaces";

function Home() {
  const [module, setModule] = useState<Module>();
  const [category, setCategory] = useState<Category>();
  const storedData = useAppSelector((state: RootState) => state.info);

  const categoryType = (customCategory: Category) => {
    if (customCategory?.subCategories) {
      return (
        <>
          {customCategory?.subCategories.map((subCat) => {
            return (
              <div className="ml-6">
                <p className="text-slate-600">{subCat.name}</p>
                {categoryType(subCat)}
              </div>
            );
          })}
        </>
      );
    }
    if (customCategory?.products) {
      return (
        <div className="flex flex-row mt-10 max-h-30">
          {customCategory?.products?.map((product) => {
            return (
              <div className=" bg-white m-3 w-30 max-h-30">
                <img
                  className=" w-20 h-auto "
                  src={`https://assets.refacil.co/providers/${product.image}`}
                />
                <p className="text-xs text-slate-800">{product.name}</p>
              </div>
            );
          })}
        </div>
      );
    }
  };

  const translation: Record<string, string> = {
    credits: "Creditos",
    withdrawal: "Retiros",
    sells: "Vender",
    marketplace: "Mercado",
    payments: "Pagos",
    charge: "Cargar",
    link: "Enlace",
  };

  return (
    <div className=" h-full w-full">
      <h1 className="m-4 font-bold text-5xl">
        Seleccione una categoria y uno de sus productos
      </h1>
      <div className="flex flex-row">
        <aside className="flex-wrap bg-blue-200">
          {storedData.modules.map((module) => {
            return (
              <li className="list-none">
                <CustomButton
                  className="text-black-600 font-medium text-xl m-4 hover:text-sky-600"
                  onClick={() => {
                    setModule(module);
                  }}
                  text={translation[module.name]}
                />
              </li>
            );
          })}
        </aside>
        <main className="flex flex-col ml-7 font-semibold w-10 ">
          <h2 className="flex flex-row">
            {module?.categories?.map((category) => {
              return (
                <CustomButton
                  className="text-xl hover:text-blue-800  m-4 border-b-indigo-500"
                  onClick={() => {
                    setCategory(category);
                  }}
                  text={category.name}
                />
              );
            })}
          </h2>
          <h3>{category !== undefined && categoryType(category)}</h3>
        </main>
      </div>
    </div>
  );
}

export default Home;
