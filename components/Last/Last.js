import React from 'react'
import  Header  from '../Last/Header/Header'
import Dishes from './Dishes/Dishes'
import * as Styled from "./styled"

const Last = () => {

return<> 

<Styled.Box1>

<Header />

<Styled.Box> 

<Styled.BoxLeft>
<Styled.Svg2 xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="white" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</Styled.Svg2>
</Styled.BoxLeft>

<Dishes />
<Dishes />
<Dishes />

<Styled.BoxRight>
<Styled.Svg1 xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="white" class="bi bi-chevron-right" viewBox="0 0 16 16" >
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</Styled.Svg1>

</Styled.BoxRight>

</Styled.Box>





</Styled.Box1>



</>
}
export default Last