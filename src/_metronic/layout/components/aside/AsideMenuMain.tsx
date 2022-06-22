/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        // icon='/media/icons/duotune/art/art002.svg'
        title="Home"
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/builder'
        // icon='/media/icons/duotune/general/gen019.svg'
        title='Activity'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
     
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Store Products'
        fontIcon='bi-archive'
        // icon='/media/icons/duotune/general/gen022.svg'
      >
          <AsideMenuItem to='/' title='Product1' hasBullet={true} />
          <AsideMenuItem to='/' title='Product2' hasBullet={true} />
          <AsideMenuItem to='/' title='Product3' hasBullet={true} />  
      </AsideMenuItemWithSub>



      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Orders'
        fontIcon='bi-archive'
        // icon='/media/icons/duotune/general/gen022.svg'
      >
          <AsideMenuItem to='/orders' title='Orders' hasBullet={true} />
          <AsideMenuItem to='/' title='Abandoned Carts' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Gift Card'
        fontIcon='bi-archive'
        // icon='/media/icons/duotune/general/gen022.svg'
      >
          <AsideMenuItem to='/' title='Card1' hasBullet={true} />
          <AsideMenuItem to='/' title='Card2' hasBullet={true} />
      </AsideMenuItemWithSub>

       <AsideMenuItem
        to='/builder'
        // icon='/media/icons/duotune/general/gen019.svg'
        title='Subscriptions'
        fontIcon='bi-layers'
      /> <AsideMenuItem
        to='/builder'
        // icon='/media/icons/duotune/general/gen019.svg'
        title='FAQs'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Contacts'
        fontIcon='bi-archive'
        // icon='/media/icons/duotune/general/gen022.svg'
      >
          <AsideMenuItem to='/' title='Contacts1' hasBullet={true} />
          <AsideMenuItem to='/' title='Contacts2' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Communications'
        fontIcon='bi-archive'
        // icon='/media/icons/duotune/general/gen022.svg'
      >
          <AsideMenuItem to='/' title='Communications1' hasBullet={true} />
          <AsideMenuItem to='/' title='Communications2' hasBullet={true} />
      </AsideMenuItemWithSub>
       <AsideMenuItem
        to='/builder'
        // icon='/media/icons/duotune/general/gen019.svg'
        title='Automations'
        fontIcon='bi-layers'
      />
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Marketing & SEO'
        fontIcon='bi-archive'
        // icon='/media/icons/duotune/general/gen022.svg'
      >
          <AsideMenuItem to='/' title='Marketing' hasBullet={true} />
          <AsideMenuItem to='/' title='SEO' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Analytics & Reports'
        fontIcon='bi-archive'
        // icon='/media/icons/duotune/general/gen022.svg'
      >
          <AsideMenuItem to='/' title='Analytics' hasBullet={true} />
          <AsideMenuItem to='/' title='Reports' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Finances'
        fontIcon='bi-archive'
        // icon='/media/icons/duotune/general/gen022.svg'
      >
          <AsideMenuItem to='/' title='Finances1' hasBullet={true} />
          <AsideMenuItem to='/' title='Finances2' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
<AsideMenuItemWithSub
        to='/crafted/pages'
        title='Channels'
        fontIcon='bi-archive'
        // icon='/media/icons/duotune/general/gen022.svg'
      >
          <AsideMenuItem to='/' title='Channels1' hasBullet={true} />
          <AsideMenuItem to='/' title='Channels2' hasBullet={true} />
      </AsideMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>

 <AsideMenuItem
        to='/'
        icon='/media/icons/duotune/general/gen022.svg'
        title='Quick Access'
        fontIcon='bi-layers'
        isLast={true}
      />
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Quick Access</span>
        </a>
      </div> */}
    </>
  )
}
