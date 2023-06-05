import React from 'react'

export default function Requirements() {
  return (
    <div id="requirements">
        <div className='reqHeading'>
            <h2>
                Условия для поступления для обучения
            </h2>
        </div>
        <div className='reqContainer'>
            <div className='reqTextBox'>
                <p>
                    Летний приём открыт в период 04.05.-04.08.2023.
                </p>
                <p>
                    Вступительные испытания летнего приёма (собеседование, тестирование и т.п.) состоятся в период 08.08.-18.08.2023.
                </p>
                <p>
                    Точное время и место вступительного испытания будут указаны в заявлении на выбранную специальность. При себе просим иметь документ, удостоверяющий личность!
                </p>
            </div>
        </div>
        <a className='btn req-btn' href='#description'>Подать заявку</a>
    </div>
  )
}
