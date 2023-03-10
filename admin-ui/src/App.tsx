import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { VariableCategoryList } from "./variableCategory/VariableCategoryList";
import { VariableCategoryCreate } from "./variableCategory/VariableCategoryCreate";
import { VariableCategoryEdit } from "./variableCategory/VariableCategoryEdit";
import { VariableCategoryShow } from "./variableCategory/VariableCategoryShow";
import { VariableList } from "./variable/VariableList";
import { VariableCreate } from "./variable/VariableCreate";
import { VariableEdit } from "./variable/VariableEdit";
import { VariableShow } from "./variable/VariableShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="VariableCategory"
          list={VariableCategoryList}
          edit={VariableCategoryEdit}
          create={VariableCategoryCreate}
          show={VariableCategoryShow}
        />
        <Resource
          name="Variable"
          list={VariableList}
          edit={VariableEdit}
          create={VariableCreate}
          show={VariableShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
