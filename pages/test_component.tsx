import Head from "next/head";
import { AppBarPrimarySearch } from "@components";
// import { products } from "components/theme/mockShopCart";

export default function TestComponent() {
  return (
    <>
      <Head>
        <title>Testing Component</title>
      </Head>
      <AppBarPrimarySearch appName="test_component" />
    </>
  );
}
