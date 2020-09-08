import request from 'supertest'
import DatabaseService from '../app/services/database-service'
import PhotoService from '../app/services/photo-service'
import populateData from '../app/start/populateData'
import app from '../app/start'

describe('App Test', () => {
  beforeAll(async () => {
    await DatabaseService.connect()
    await populateData()
  })

  afterAll(async () => {
    await DatabaseService.close()
  })

  test('should have more than 1 photo', async (done) => {
    const [ photos, count ] = await PhotoService.list({ skip: 0, limit: 5 })
    expect(count).toBeGreaterThan(1)
    done()
  })

  test('GET /random-url should return 404', done => {
    request(app).get('/reset')
      .expect(404, done)
  })

  test('GET /health should return 200', async (done) => {
    request(app).get('/health')
      .expect(200, done)
  })

  test('GET /photos/{{Album}}/{{FileName}} return 200', async (done) => {
    const album = 'personal'
    const filename = '10.png'
    request(app).get(`/photos/${album}/${filename}`)
      .expect(200, done)
  })
  
  test('POST /photos/list should return 200', async (done) => {
    const body = { skip: 0, limit: 5 }
    request(app).post('/photos/list')
      .send(body)
      .expect(200, done)
  })

  test('DELETE /photos/{{Album}}/{{FileName}} should return 200', async (done) => {
    const album = 'Personal'
    const filename = '15.png'
    request(app).delete(`/photos/${album}/${filename}`)
      .expect(200, done)
  })

  test('DELETE /photos should return 200', async (done) => {
    const body = [
      {
        "album": "Personal",
        "documents": "1.png, 2.png"
      },
      {
        "album": "Other",
        "documents": "3.png"
      }
    ]
    request(app).delete('/photos')
      .send(body)
      .expect(200, done)
  })
})
