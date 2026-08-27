'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Heart, Menu, Search, ShoppingBag, Sparkles, X } from 'lucide-react'

const products = [
  { name: 'Neem & Tulsi Elixir', type: 'Daily wellness oil', price: '₹899', image: '/vasundhare-hero.png', tone: 'sage' },
  { name: 'Forest Honey', type: 'Raw, wild & unfiltered', price: '₹649', image: '/vasundhare-hero.png', tone: 'sand' },
  { name: 'Golden Root Blend', type: 'Turmeric ritual powder', price: '₹549', image: '/vasundhare-hero.png', tone: 'clay' },
]

function Header({ count, onCart }: { count: number; onCart: () => void }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a href="#top" className="wordmark">VASUNDHARE<span>®</span></a>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
      <a href="#story" onClick={() => setOpen(false)}>Our story</a><a href="#shop" onClick={() => setOpen(false)}>Shop</a><a href="#journal" onClick={() => setOpen(false)}>Journal</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a>
    </nav>
    <div className="header-actions"><button aria-label="Search"><Search size={18} /></button><button aria-label="Open cart" onClick={onCart} className="bag"><ShoppingBag size={19} /><b>{count}</b></button><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
  </header>
}

function ProductCard({ product, onAdd }: { product: typeof products[number]; onAdd: () => void }) {
  return <article className={`product-card ${product.tone}`}>
    <div className="product-image"><Image src={product.image} alt={`${product.name} product`} fill sizes="(max-width: 700px) 85vw, 30vw" /><button className="wish" aria-label={`Add ${product.name} to wishlist`}><Heart size={17} /></button><button className="quick" onClick={onAdd}>Add to bag <ArrowUpRight size={15} /></button></div>
    <div className="product-meta"><div><p className="eyebrow">{product.type}</p><h3>{product.name}</h3></div><strong>{product.price}</strong></div>
  </article>
}

export default function VasundhareHome() {
  const [cart, setCart] = useState(0)
  const [drawer, setDrawer] = useState(false)
  const add = () => { setCart(cart + 1); setDrawer(true) }
  return <main id="top">
    <Header count={cart} onCart={() => setDrawer(true)} />
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow reveal">A slower kind of luxury</p><h1 className="reveal">Rooted in<br /><i>Nature.</i><br />Made for life.</h1><p className="hero-text reveal">Pure, purposeful rituals from the living earth. Thoughtfully sourced in India, made to become part of your everyday.</p><div className="hero-ctas reveal"><a className="button dark" href="#shop">Explore products <ArrowUpRight size={16} /></a><a className="text-link" href="#story">Discover our story <span>↗</span></a></div></div>
      <div className="hero-art"><div className="art-note">01 / 04<br /><span>THE DAILY RITUAL</span></div><div className="hero-orbit" /><Image src="/vasundhare-hero.png" alt="Vasundhare botanical wellness bottle surrounded by leaves" fill priority sizes="(max-width: 700px) 90vw, 52vw" className="hero-product" /><div className="vertical-label">VASUNDHARE — ESSENTIALS</div></div>
      <div className="scroll-cue">Scroll to wander <span>↓</span></div>
    </section>
    <section className="ticker" aria-label="Brand values"><span>PURE BY NATURE</span><span>ETHICALLY SOURCED</span><span>MADE WITH PURPOSE</span><span>PURE BY NATURE</span></section>
    <section className="story section" id="story"><div className="story-image"><Image src="/vasundhare-hero.png" alt="Botanical ingredients in warm sunlight" fill sizes="(max-width: 700px) 100vw, 48vw" /></div><div className="story-copy"><p className="eyebrow">The Vasundhare way</p><h2>From the earth,<br /><i>with purpose.</i></h2><p>We believe the best things are grown slowly. Vasundhare brings ancient Indian wisdom and modern clarity together — creating essentials that honour where they come from.</p><a className="text-link" href="#contact">Know our story <ArrowUpRight size={16} /></a><div className="values"><div><strong>100%</strong><span>natural</span></div><div><strong>01</strong><span>honest ritual</span></div><div><strong>∞</strong><span>earth first</span></div></div></div></section>
    <section className="shop section" id="shop"><div className="section-heading"><div><p className="eyebrow">The collection</p><h2>Nature&apos;s finest,<br /><i>curated for you.</i></h2></div><a className="text-link" href="#shop">View all products <ArrowUpRight size={16} /></a></div><div className="product-grid">{products.map(p => <ProductCard key={p.name} product={p} onAdd={add} />)}</div></section>
    <section className="manifesto"><p className="eyebrow">A daily reminder</p><h2>Good things take<br /><i>root.</i></h2><div className="manifesto-side">Every product is a small act of care — for your body, your home, and the world that holds us.</div></section>
    <section className="journal section" id="journal"><div className="section-heading"><div><p className="eyebrow">From our journal</p><h2>Stories from<br /><i>our world.</i></h2></div><a className="text-link" href="#journal">Read the journal <ArrowUpRight size={16} /></a></div><div className="journal-grid"><article><div className="journal-image"><Image src="/vasundhare-hero.png" alt="Close-up of natural ingredients" fill sizes="33vw" /></div><p className="eyebrow">Rituals · 06.08.24</p><h3>The art of making space for less</h3></article><article><div className="journal-image offset"><Image src="/vasundhare-hero.png" alt="Warm botanical still life" fill sizes="33vw" /></div><p className="eyebrow">Origins · 22.07.24</p><h3>Notes from the living earth</h3></article></div></section>
    <footer id="contact"><div className="footer-brand"><span className="wordmark">VASUNDHARE<span>®</span></span><h2>Come back<br /><i>to earth.</i></h2></div><div className="footer-links"><a href="#shop">Shop</a><a href="#story">Our story</a><a href="#journal">Journal</a><a href="#contact">Contact</a></div><p className="copyright">© 2024 Vasundhare. Made with purpose in India.</p></footer>
    {drawer && <div className="drawer-backdrop" onClick={() => setDrawer(false)}><aside className="cart-drawer" onClick={e => e.stopPropagation()}><div className="drawer-top"><h2>Your bag <span>({cart})</span></h2><button onClick={() => setDrawer(false)} aria-label="Close cart"><X size={20} /></button></div>{cart ? <><div className="cart-line"><Image src="/vasundhare-hero.png" alt="Selected product" width={76} height={92} /><div><p>Neem & Tulsi Elixir</p><span>₹899 · Qty {cart}</span></div></div><div className="drawer-total"><span>Subtotal</span><strong>₹{899 * cart}</strong></div><button className="button dark full">Checkout <ArrowUpRight size={16} /></button></> : <div className="empty-cart"><Sparkles size={20} /><p>Your bag is waiting<br />for something good.</p><a href="#shop" onClick={() => setDrawer(false)}>Explore the collection</a></div>}</aside></div>}
  </main>
}
