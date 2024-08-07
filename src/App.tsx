import React, { Suspense, useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/Global";
import Layout from "./components/Layout";

const PersonalInfoComponent = React.lazy(
  () => import("./pages/PersonalInfoForm")
);
const AddressWorkComponent = React.lazy(
  () => import("./pages/AddressWorkForm")
);
const LoanParametersComponent = React.lazy(
  () => import("./pages/LoanParametersForm")
);
//Использую lazy load для загрузки компонентов по необходимости
//(не даёт большого выигрыша в производительности в мелких проектах по типу этого, но решил использовать этот подход)

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);
  //Добавил редирект на домашнюю страницу при рефреше страницы, т.к состояния формы сбрасываются.
  //Таким образом избегаю кейс неполного заполнения формы

  return (
    <Theme>
      {/*Применяю глобальную тему для дочерних компонентов*/}

      <GlobalStyle />
      {/*Применяю глобалые стили для всего приложения*/}

      <Suspense fallback={<div>Loading...</div>}>
        {/*"Запасной" компонент, отображается во время загрузки, пока асинхронно загружаемый компонент не будет готов*/}

        <Layout>
          <Routes>
            {/*Routes управляет маршрутиризацией в проекте, Route определяет маршрут для компонента(element) который будет соответствовать пути(path)*/}

            <Route path="" element={<PersonalInfoComponent />} />
            <Route path="address-work" element={<AddressWorkComponent />} />
            <Route
              path="loan-parameters"
              element={<LoanParametersComponent />}
            />
          </Routes>
        </Layout>
      </Suspense>
    </Theme>
  );
}

export default App;
