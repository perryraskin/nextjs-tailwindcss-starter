import React, { ComponentType } from "react"
import Layout from "../components/Layout/Layout"
import Store from "../components/Store"

function withLayout<T>(WrappedComponent: ComponentType<T>) {
  return function ComponentWithLayout(props: T) {
    return (
      <Store>
        <Layout>
          <WrappedComponent {...props} />
        </Layout>
      </Store>
    )
  }
}

export default withLayout
