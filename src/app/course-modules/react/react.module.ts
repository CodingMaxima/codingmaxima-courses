import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationModule } from './installation/installation.module';
import { RealDomVirtualDomModule } from './real-dom-virtual-dom/real-dom-virtual-dom.module';
import { JsxSyntaxModule } from './jsx-syntax/jsx-syntax.module';
import { StatePropsModule } from './state-props/state-props.module';
import { ClassComponentsModule } from './class-components/class-components.module';
import { ComponentsLifecycleModule } from './components-lifecycle/components-lifecycle.module';
import { RefsHocMemoizationModule } from './refs-hoc-memoization/refs-hoc-memoization.module';
import { FunctionalComponentsModule } from './functional-components/functional-components.module';
import { ReactHooksModule } from './react-hooks/react-hooks.module';
import { ReactRouterModule } from './react-router/react-router.module';
import { AxiosModule } from './axios/axios.module';
import { ReactReduxModule } from './react-redux/react-redux.module';
import { MiddlewareModule } from './middleware/middleware.module';
import { CsrSsrSgcModule } from './csr-ssr-sgc/csr-ssr-sgc.module';
import { PerformanceTechniquesModule } from './performance-techniques/performance-techniques.module';
import { ApiReferencesModule } from './api-references/api-references.module';
import { TestcasesModule } from './testcases/testcases.module';
import { WebpackBableModule } from './webpack-bable/webpack-bable.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstallationModule,
    RealDomVirtualDomModule,
    JsxSyntaxModule,
    StatePropsModule,
    ClassComponentsModule,
    ComponentsLifecycleModule,
    RefsHocMemoizationModule,
    FunctionalComponentsModule,
    ReactHooksModule,
    ReactRouterModule,
    AxiosModule,
    ReactReduxModule,
    MiddlewareModule, 
    CsrSsrSgcModule,
    PerformanceTechniquesModule,
    ApiReferencesModule,
    TestcasesModule,
    WebpackBableModule
    


  ]
})
export class ReactModule { }
