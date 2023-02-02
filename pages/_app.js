
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
  