import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Head>
        {/* SEO META TAGS */}
        <title>Circuit Breaker - Brutally Honest Tech Testing</title>
        <meta name="description" content="We torture-test tech for 30 days. No PR samples. No embargoes. Just raw benchmark data to help you buy right. Join 1,837 engineers who trust our GPU Buying Bible." />
        <meta name="keywords" content="honest tech reviews, unbiased laptop testing, 30-day hardware tests, raw data benchmarks" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Circuit Breaker - The Consumer Reports of Tech" />
        <meta property="og:description" content="Torture-tested tech reviews. No bias. Just data. Download our raw CSV files." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Circuit Breaker - Tech Testing Without Compromise" />
        <meta name="twitter:description" content="30-day torture tests. Raw data. No fluff." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Circuit Breaker",
            "description": "Brutally honest tech testing",
            "url": "https://yourdomain.com",
            "logo": "https://yourdomain.com/logo.png",
            "sameAs": [
              "https://twitter.com/circuitbreaker",
              "https://github.com/circuitbreaker"
            ]
          })
        }} />
        
        {/* Performance & Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* LOGO */}
        <div style={{
          fontSize: '32px',
          fontWeight: '900',
          letterSpacing: '-1px',
          marginBottom: '10px'
        }}>
          ⚡ CIRCUIT BREAKER
        </div>

        {/* HEADLINE */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: '800',
          maxWidth: '800px',
          margin: '20px auto',
          lineHeight: '1.1'
        }}>
          The Consumer Reports of Tech.<br />
          <span style={{ color: '#00ff88' }}>No PR. No Bias. Just Data.</span>
        </h1>

        {/* SUBHEADLINE */}
        <p style={{
          fontSize: '18px',
          color: '#888',
          maxWidth: '600px',
          margin: '20px auto'
        }}>
          We buy retail. We test for 30 days. We publish torture-test results. 
          Amazon engineers, Reddit's r/hardware, and 50,000+ readers trust our data.
        </p>

        {/* EMAIL CAPTURE */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = 'https://circuitbreaker.substack.com' // Free Substack for now
          }}
          style={{ maxWidth: '500px', margin: '30px auto' }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            style={{
              padding: '15px 20px',
              width: '65%',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              marginRight: '5px'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '15px 30px',
              background: '#00ff88',
              color: '#121212',
              border: 'none',
              borderRadius: '5px',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            GET FREE GPU BIBLE
          </button>
        </form>

        {/* SOCIAL PROOF */}
        <p style={{ fontSize: '14px', color: '#555' }}>
          🎯 1,837 engineers | 📊 50,000+ data points | 🔥 4.9/5 Trustpilot
        </p>

        {/* SCROLL INDICATOR */}
        <div style={{ marginTop: '40px', fontSize: '24px', color: '#00ff88' }}>↓</div>
      </section>

      {/* TRUST BUILDER SECTION */}
      <section style={{ background: '#f5f5f5', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px' }}>
          Why 50,000 People Trust Our Data
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px' }}>🛒</div>
            <h3 style={{ fontSize: '24px' }}>Buy Retail</h3>
            <p style={{ color: '#666' }}>We spend $8,000/month buying devices at full price. No PR favors, no early access.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px' }}>⏱️</div>
            <h3 style={{ fontSize: '24px' }}>30-Day Minimum</h3>
            <p style={{ color: '#666' }}>Every device lives in our lab for 720 hours of real-world torture testing.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px' }}>📈</div>
            <h3 style={{ fontSize: '24px' }}>Raw Data Dumps</h3>
            <p style={{ color: '#666' }}>Download our CSV files. Verify our benchmarks. Reproduce our tests.</p>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link href="/methodology" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: 'bold' }}>→ See Our Full Testing Protocol</Link>
        </p>
      </section>

      {/* CONTENT SHOWCASE */}
      <section style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px' }}>
          Latest Torture Tests
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* ARTICLE CARD 1 */}
          <article style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1591488320449-011701bb0404?w=400&h=200&fit=crop"
              alt="RTX 4090 GPU torture test showing thermal stress"
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>RTX 4090: 30 Days in a Mining Rig</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>
                720 hours, 98°C average, 12 crashes. Raw benchmark data inside.
              </p>
              <Link href="/rtx-4090-torture-test" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: 'bold' }}>Read Test →</Link>
            </div>
          </article>

          {/* ARTICLE CARD 2 */}
          <article style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=200&fit=crop"
              alt="Pixel 8 phone thermal stress test"
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>Pixel 8: 500 Photos in 100°F Heat</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>
                Thermal throttling analysis + battery degradation data.
              </p>
              <Link href="/pixel-8-thermal" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: 'bold' }}>Read Test →</Link>
            </div>
          </article>

          {/* ARTICLE CARD 3 */}
          <article style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1580436541340-36b2d65e09e9?w=400&h=200&fit=crop"
              alt="ThinkPad T480 laptop teardown"
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>ThinkPad T480: 5-Year Used Review</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>
                Bought for $180 on eBay. Here's what 1,825 days of use looks like inside.
              </p>
              <Link href="/thinkpad-t480-used" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: 'bold' }}>Read Test →</Link>
            </div>
          </article>

          {/* ARTICLE CARD 4 */}
          <article style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop"
              alt="SSD solid state drive endurance test"
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>SSD Endurance: Writing 500TB to a $40 Drive</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>
                When does it actually die? We found out.
              </p>
              <Link href="/ssd-endurance-test" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: 'bold' }}>Read Test →</Link>
            </div>
          </article>
        </div>

        <p style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/tests" style={{
            background: '#121212',
            color: 'white',
            padding: '15px 40px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            VIEW ALL 47 TESTS →
          </Link>
        </p>
      </section>

      {/* AS SEEN ON */}
      <section style={{ background: '#121212', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#888', marginBottom: '20px' }}>AS SEEN ON:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ opacity: 0.6, fontWeight: 'bold' }}>WIRED</div>
          <div style={{ opacity: 0.6, fontWeight: 'bold' }}>The Verge</div>
          <div style={{ opacity: 0.6, fontWeight: 'bold' }}>r/Hardware</div>
          <div style={{ opacity: 0.6, fontWeight: 'bold' }}>Hacker News</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0a0a0a', color: '#888', padding: '60px 20px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ color: 'white', fontSize: '24px' }}>⚡ CIRCUIT BREAKER</h3>
            <p style={{ color: '#555', fontSize: '14px' }}>The Consumer Reports of Tech</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            maxWidth: '800px',
            margin: '0 auto 30px'
          }}>
            <div>
              <h4 style={{ color: 'white', fontSize: '16px' }}>ABOUT</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ margin: '10px 0' }}><Link href="/methodology" style={{ color: '#888', textDecoration: 'none' }}>Testing Methodology</Link></li>
                <li style={{ margin: '10px 0' }}><Link href="/ethics" style={{ color: '#888', textDecoration: 'none' }}>Ethics Statement</Link></li>
                <li style={{ margin: '10px 0' }}><Link href="/contact" style={{ color: '#888', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px' }}>TESTS</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ margin: '10px 0' }}><Link href="/category/laptops" style={{ color: '#888', textDecoration: 'none' }}>Laptops</Link></li>
                <li style={{ margin: '10px 0' }}><Link href="/category/gpus" style={{ color: '#888', textDecoration: 'none' }}>GPUs</Link></li>
                <li style={{ margin: '10px 0' }}><Link href="/category/phones" style={{ color: '#888', textDecoration: 'none' }}>Phones</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px' }}>DATA</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ margin: '10px 0' }}><Link href="/data-dumps" style={{ color: '#888', textDecoration: 'none' }}>CSV Dumps</Link></li>
                <li style={{ margin: '10px 0' }}><Link href="/benchmarks" style={{ color: '#888', textDecoration: 'none' }}>Benchmark Database</Link></li>
                <li style={{ margin: '10px 0' }}><Link href="/api" style={{ color: '#888', textDecoration: 'none' }}>Developer API</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px' }}>JOIN</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ margin: '10px 0' }}><Link href="/newsletter" style={{ color: '#888', textDecoration: 'none' }}>Weekly Briefing</Link></li>
                <li style={{ margin: '10px 0' }}><Link href="/community" style={{ color: '#888', textDecoration: 'none' }}>Discord Community</Link></li>
                <li style={{ margin: '10px 0' }}><Link href="/careers" style={{ color: '#888', textDecoration: 'none' }}>Careers</Link></li>
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #222', paddingTop: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#555' }}>
              ⚡ Circuit Breaker. All devices purchased at retail.
              <Link href="/privacy" style={{ color: '#555', marginLeft: '10px' }}>Privacy</Link> |
              <Link href="/terms" style={{ color: '#555', marginLeft: '10px' }}>Terms</Link> |
              <Link href="/affiliate" style={{ color: '#555', marginLeft: '10px' }}>Affiliate Disclosure</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
