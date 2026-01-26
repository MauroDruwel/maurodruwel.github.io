# Hosting
This website is currently hosted on GitHub Pages. The reason is simple: it is easy, reliable, and free.

# Curiosity
Years ago, I hosted this website on a Raspberry Pi. Eventually, I discovered GitHub Pages and learned how to connect it to a custom domain. 

About a year ago, I discovered Cloudflare. Currently, I have almost everything hosted using `cloudflared` tunnels and other Cloudflare services, except for this website, which still lives on GitHub Pages. I thought, "Why not move it to Cloudflare Pages, or even explore better alternatives?" It was time to dig deeper.

![alt text](image.png)

# Speeeeeeedddd 🚤
GitHub Pages is quite fast, especially compared to my old Raspberry Pi setup. However, before committing to a move, I wanted to run some speed tests.

According to [this comparison by Bejamas](https://bejamas.com/compare/cloudflare-pages-vs-github-pages), Cloudflare Pages is significantly faster, especially for users outside the US.

![alt text](image-1.png)

I decided to run my own tests using [DebugBear](https://www.debugbear.com/) to see how they compared in my specific use case.

# Moving to Cloudflare Pages
After reviewing the speed test results, I decided to migrate my website to Cloudflare Pages. The process was straightforward: I simply connected my GitHub repository to the Cloudflare Pages dashboard and deployed it.

![alt text](image-2.png)

Once configured, the deployment was smooth and "easy peasy!"

![alt text](<Schermafbeelding 2026-01-24 135003.png>)

# Conclusion
You can find the detailed speed results in this folder. While the data suggests it should be faster, the real benefit for me is the peace of mind that comes with having my entire ecosystem in one place.
