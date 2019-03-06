import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Loadable from 'react-loadable'
import { StaticRouter } from 'react-router'
import { Helmet } from 'react-helmet'
import App from '../src/App'
import { fetchData } from '../src/api'
import manifest from '../build/asset-manifest.json'
import path from 'path'
import fs from 'fs'
import CategoriesContext from '../src/categories-context'

const extractAssets = (assets, chunks) =>
  Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k])

const readFile = filePath =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
      err ? reject(err) : resolve(htmlData)
    })
  })

export default async (req, res, next) => {
  try {
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html')
    const htmlData = await readFile(filePath)
    const modules = []
    const helmet = Helmet.renderStatic()
    const data = await fetchData()

    const html = ReactDOMServer.renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <StaticRouter location={{ pathname: req.baseUrl, search: req.url.replace('/', '') }}>
          <CategoriesContext.Provider value={data}>
            <App />
          </CategoriesContext.Provider>
        </StaticRouter>
      </Loadable.Capture>
    )

    const extraChunks = extractAssets(manifest, modules)
      .map(c => `<script type="text/javascript" src="/${c}"></script>`)

    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace('</body>', extraChunks.join('') + '</body>')
        .replace('<title></title>', helmet.title.toString() + helmet.meta.toString())
        .replace('__DATA__=[]', `__DATA__=${JSON.stringify(data)}`))
  } catch (err) {
    console.error('err', err)
    return res.status(500).end()
  }
}
