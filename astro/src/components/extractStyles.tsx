import { renderToString } from 'react-dom/server';
import { createCache, StyleProvider, extractStyle } from '@ant-design/cssinjs'

export function extractStyles(element: JSX.Element) {
  const cache = createCache()

  const htmlString = renderToString(
    <StyleProvider cache={cache}>
      {element}
    </StyleProvider>
  )
  return {style: extractStyle(cache), htmlString}
}