// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vn4GCfRoYe35APzZGsNDnF
import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { CommerceProviderComponent } from "../../../commerce/bigcommerce/registerCommerceProvider"; // plasmic-import: JuJYgKZmrTfxxT/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  commerceProviderComponentProps?: Partial<
    Omit<React.ComponentProps<typeof CommerceProviderComponent>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, commerceProviderComponentProps } = props;

  return (
    <CommerceProviderComponent
      {...commerceProviderComponentProps}
      accessToken={
        commerceProviderComponentProps &&
        "accessToken" in commerceProviderComponentProps
          ? commerceProviderComponentProps.accessToken!
          : ("rxvy03kvd82x8r2cmci1zquoelofcx" as const)
      }
      channelId={
        commerceProviderComponentProps &&
        "channelId" in commerceProviderComponentProps
          ? commerceProviderComponentProps.channelId!
          : undefined
      }
      clientId={
        commerceProviderComponentProps &&
        "clientId" in commerceProviderComponentProps
          ? commerceProviderComponentProps.clientId!
          : ("sklxsuit3pijq1cgsacl1713aj9uzjv" as const)
      }
      clientName={
        commerceProviderComponentProps &&
        "clientName" in commerceProviderComponentProps
          ? commerceProviderComponentProps.clientName!
          : ("Plasmic" as const)
      }
      clientSecret={
        commerceProviderComponentProps &&
        "clientSecret" in commerceProviderComponentProps
          ? commerceProviderComponentProps.clientSecret!
          : ("1a8147648a436753d7ac19601e02410797048e897c00034fa9c7d3e939e0749d" as const)
      }
      storeFrontApiToken={
        commerceProviderComponentProps &&
        "storeFrontApiToken" in commerceProviderComponentProps
          ? commerceProviderComponentProps.storeFrontApiToken!
          : ("eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly9uZXh0YmFzZS1zYW5kYm94LTMubXliaWdjb21tZXJjZS5jb20iLCJodHRwczovL2NvZGVnZW4ucGxhc21pYy5hcHAiXSwiZWF0IjoxNzg3NzYyOTIzLCJpYXQiOjE2ODc3NzI3OTAsImlzcyI6IkJDIiwic2lkIjoxMDAyOTA2MzY2LCJzdWIiOiJza2x4c3VpdDNwaWpxMWNnc2FjbDE3MTNhajl1emp2Iiwic3ViX3R5cGUiOjIsInRva2VuX3R5cGUiOjF9.LxSQZqRpIcBBjKZCe93qVyuVwZhPvvzX0LAsCLhg_kgKaw7kZO20dpifPyDlmg_Jf9ZXRCJ6Sur08CSq3OUV9Q" as const)
      }
      storeHash={
        commerceProviderComponentProps &&
        "storeHash" in commerceProviderComponentProps
          ? commerceProviderComponentProps.storeHash!
          : ("5o7xzmxoo0" as const)
      }
    >
      {children}
    </CommerceProviderComponent>
  );
}