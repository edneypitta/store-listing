import express from 'express'
import Loadable from 'react-loadable'
import serverRenderer from './renderer'
import path from 'path'

const app = express()
const router = express.Router()

router.use('^/$', serverRenderer)
router.use(
  express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' }))
router.use('*', serverRenderer)

app.use(router)

const port = process.env.PORT || 3002
Loadable
  .preloadAll()
  .then(() =>
    app.listen(port, () => console.log(`Server listening on port ${port}`)))