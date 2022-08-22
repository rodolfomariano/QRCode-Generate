import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import { Container, Content } from './styles/App'

function App() {
  const [link, setLink] = useState('rodolfo.dev.br')
  const [qrCodeLink, setQRCodeLink] = useState('')

  function generateFileToDownload() {
    QRCodeLink.toDataURL(link, {
      width: 600,
      margin: 3,
    }, (err, url) => {
      setQRCodeLink(url)
    })
  }

  useEffect(() => {
    generateFileToDownload()
  }, [link])

  return (
    <Container>
      <Content>
        <input 
          type="text" 
          placeholder="Digite a url" 
          onChange={e => setLink(e.target.value)}
        />

        <QRCode 
          value={link} 
          fgColor='#FFB400'
          bgColor='#242424'
        />

        <a 
          href={qrCodeLink}
          download='qrCode.png'
        >
          Baixar QRCode
        </a>
      </Content>
    </Container>
  )
}

export default App
