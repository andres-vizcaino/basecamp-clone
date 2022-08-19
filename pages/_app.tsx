/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthProvider } from 'context/auth.context'
import { AuthGuard } from '@components/Auth/AuthGuard'
import { NextApplicationPage } from 'types/NextapplicationPage'

// TODO: Cambiar por AuthGuard desde servidor, el actual se realiza por cliente.

function MyApp(props: AppProps) {
  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: any } = props
  return <>
    <Head>
      <title>Basecamp Clone</title>
    </Head>
    <AuthProvider>
      {Component.requireAuth ? (
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      ) : (
        // public page
        <Component {...pageProps} />
      )}
    </AuthProvider>
  </>
}

export default MyApp
