import { useEffect, useState } from 'react'
import { Select, Input } from 'antd'
import bg from '/bg.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("REDEMPTION")
  const [inputVal, setInputVal] = useState(0)
  const [selectVal, setSelectVal] = useState("USDT")
  const [btnText, setBtnText] = useState("Switch to Core")
  const [stakeStatus, setStakeStatus] = useState(1)

  console.log('stakeStatus', stakeStatus === 1);

  const onHandle = () => {
    if (stakeStatus === 1) {
       setStakeStatus(2)
    }
    if (stakeStatus === 2) {
       setStakeStatus(3)
    }

    if (stakeStatus === 3) {
       setStakeStatus(1)
    }
  }

  useEffect(() => {
    if (stakeStatus === 1) {
      setBtnText('Switch to Core')
    }

    if (stakeStatus === 2) {
      setBtnText('Redeem')
    }

    if (stakeStatus === 3) {
      setBtnText('Confirm Redeption')
    }

  }, [stakeStatus])
  
  return (
    <div className='home'>
      <img className='banner' src="/banner.png" alt="" />
      <div className='stake-box'>
        <div className="top">
          <div className="left">
            <div className="line-bg"></div>
            <div className="line-bg"></div>
            <div className="line-bg"></div>
            <div className="line-bg"></div>
            <div className="line-bg"></div>
            <div className="line-bg"></div>
          </div>
          
          <div className="title">{title}</div>

          <div className="right">
            <div className="line-bg"></div>
            <div className="line-bg"></div>
            <div className="line-bg"></div>
            <div className="line-bg"></div>
            <div className="line-bg"></div>
            <div className="line-bg"></div>
          </div>
        </div>
        <div className='stake-content'>
          <div className='stake-left'>
            <div className="operation-name">Unstake</div>
            
            {
              stakeStatus === 3
              &&
              <div className='redeem-box'>
                <div className="redeem-label">Your Redeem</div>
                <div className='balance-redeem'>
                  <div className='redeem-left'>
                    <img width={18} src="/CORE.png" alt="" />
                    {selectVal}
                  </div>
                  <div className='redeem-right'>
                    130,021.12
                  </div>
                </div>
              </div>
            }
            {
              stakeStatus !== 3
              &&
              <div className="token-box">
                <div className='input-box'>
                  <Select 
                    options={[
                      { value: 'USDT', label: 'USDT' },
                      { value: 'CORE', label: 'CORE' },
                    ]}
                    onChange={(val) => {
                      setSelectVal(val)
                    }}
                    defaultValue="USDT"
                    labelRender={() => {
                      return(
                        <div className='customize-label'>
                          <img src={`${selectVal}.png`} />
                          {selectVal}
                        </div>
                      )
                    }}
                    className='token-select'>
                  </Select>
                  <Input defaultValue={inputVal} className='token-input' />
                </div>
                
                <div className="balance-box">
                  <div className="token-balance">
                    <div className='balance-number'>Balance: 33,333</div>
                    <div className='max-btn'>MAX</div>
                  </div>
                  <div className="estimate">
                    ~$33,332.98
                  </div>
                </div>
              </div>
            }

            <div className="stake-btn" onClick={onHandle}>
              <div className='btn-text'>
                {btnText}
              </div>
              <div className='btn-border'></div>
            </div>
            
            {
              (stakeStatus === 1 || stakeStatus === 2)
              && 
              <>
                <div className="stake-info">
                  <div className="stake-label">TOTAL STAKED</div>
                  <div className="stake-value">{(Math.random() * 1000000).toFixed(2).toLocaleString()} {selectVal}</div>
                </div>
                <div className="box-bottom"></div>
              </>
            }

          </div>

          <div className="stake-right">
            <div className='bottom-border'></div>
              <img src="/resize.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
