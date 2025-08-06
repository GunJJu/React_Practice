import './App.css'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  return (
    <div>
      <Button text={'메일'} color={'red'} />
      <Button text={'카페'} color={'blue'} />
      <Button text={'블로그'} color={'green'} />
      <Button text={'기본값'} />

      <Button text={'자식요소'} color={'yellow'} >
        <strong>
          어라라..?
        </strong>
      </Button>

      <Input title={'제목입니다.'} placeholder={"플레이스 홀더 입니다."} />
    </div>
  )
}

export default App
