import React, { Component } from 'react'
import Container from '../../Container/Container'
import ButtonText from '../../ButtonText/ButtonText'
import Subscribe from '../../Subscribe/Subscribe'
import Card from '../../Card/Card'
import Cheat from './Cheat/Cheat'

import events from '../../../core/EventEmitter.js'

import './Guides.scss'

class Guides extends Component{
  showModal = title => {
    events.showModal(<Subscribe title={title} button="Subscribe" />)
  }

  showGuide = name => {
    // eslint-disable-next-line no-undef
    $.fancybox.open([
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-002.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-002.png' }
      },
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-003.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-003.png' }
      },
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-004.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-004.png' }
      },
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-005.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-005.png' }
      },
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-006.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-006.png' }
      },
      {
        src: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-007.png',
        opts: { thumb: '/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-007.png' }
      }
    ], {
      thumbs: {
        autoStart: true
      }
    });
  }

  render() {
    return (
      <div>
        <Container>
          <div className="Guides">
            <Card key="btc" img="/images/guides/btc-in-simple-term.png" title="Bitcoin Explained in Simple Terms"
                  actions={[
                    <ButtonText key="0" text="Look inside" onClick={() => this.showGuide("simple-term")} />,
                    <ButtonText key="1" text="Download" onClick={() => this.showModal('Bitcoin Explained in Simple Terms')} />
                  ]}>
              - What is Bitcoin? <br />
              - What makes Bitcoin so unique?<br />
              - And how can you invest?<br /><br />

              The purpose of this eBook is to answer those questions by introducing you to Bitcoin and other
              cryptocurrencies in simple terms and an easy-to-digest manner
            </Card>
            <Card key="crypto" img="/images/guides/crypto-for-beginners.png" title="Crypto Terms for Beginners"
                  actions={[
                    <ButtonText key="0" text="Look inside" onClick={() => this.showGuide()} />,
                    <ButtonText key="1" text="Download" onClick={() => this.showModal('Crypto Terms for Beginners')} />
                  ]}>
              - Do you know a whale from a bear?<br />
              - A cold wallet from a decentralised wallet?<br /><br />

              If not, this cheat sheet of 50 beginner cryptocurrency terms is for you. <br />
              So the next time you're in a conversation about crypt and someone asks you to "buy the dip", you'll know
              what
              they mean!
            </Card>
          </div>
        </Container>
        <div className="cheat-cheets">
          <Container>
            <div className="cheat-header">
              Cheat-Sheets
            </div>
          </Container>
          <div className="cheat-items">
            <Cheat title="Market Capitalization" description="The total number of coins in circulation multiplied by individ- ual coin price" />
            <Cheat title="Software Wallet" description="A method of storing cryptocur-rency keys within software files on your computer or mobile device" />
            <Cheat title="Shilling" description="Spreading fake news to increase the price of a crypto- currency" />
            <Cheat title="Token" description="Used interchangeably with “coin”. Technically, a subset of cryptocurrency that has its own blockchain and represents an asset or utility" />
            <Cheat title="Bull" description="Someone who is opti- mistic about the market or asset value" />
          </div>
        </div>
        <Container>
          <Subscribe />
        </Container>
      </div>
    )
  }
}

export default Guides
