---
title: "digital privacy for the average person"
date: 2024-08-20T1012
---

this post is just compilation of my personal advice and tips for privacy for the average person (so no encryption or self-hosting stuff that might require a bit more technical knowledge). take my advice with a grain of salt and do your own research and judgement! i'll mainly be focusing on free options for this post, though there are plenty of good paid options as well.

i'll be going over some general good practices first, then most of the post will be my recommendations for tools and alternatives. this isn't meant to be the end-all-be-all of privacy, i'm just trying to provide a place to start. do your own research if something catches your eye!

here are some sites/resources i recommend taking a look at:

- [privacyguides](https://www.privacyguides.org/): they show their criteria for each category and explain why each tool is chosen, as well as noting things to keep in mind.
- [awesome privacy](https://github.com/pluja/awesome-privacy): more privacy-focused recommendations
- [ToS;DR](https://tosdr.org/): see a summary of services' TOS

## general good practices

thank you to [sennoh](https://woof.tech/@sennoh) for most of the information from this section!

- don't put your personally identifiable information (PII) online — this would be your full name, where you live or work, etc.
  - try to avoid taking images of yourself in places that could expose where you are. share your general location with care
  - even revealing your full name can be dangerous, even though sites like facebook require it. you ever see those reddit stories where someone gets their life destroyed because they put too much info on facebook?
- use a password manager. please don't use google chrome or firefox or whatever as your password manager [that is not a good idea!!!](https://www.techradar.com/pro/security/google-admits-it-accidentally-broke-its-own-password-manager) i personally use bitwarden, which is cloud-based and encrypted. i also see keepass recommended, which stores passwords locally. for those terminal nerds out there [pass](https://www.passwordstore.org/) may be worth looking into
- it's generally smart to use 2FA to protect all your accounts or at least the important ones. my personal client of choice is [ente auth](https://ente.io/auth)

if you'd like more information, take a look at privacyguides' [knowledge base](https://www.privacyguides.org/en/basics/why-privacy-matters/#what-is-privacy).

## communications

### email

i don't know how many people in the current generation actively use email — i do, it's federated and just pretty convenient in general. pretty much everybody has an email.

[here's privacyguide's page on email providers.](https://www.privacyguides.org/en/email/)

#### [proton](https://proton.me/)

you've probably heard of protonmail — their marketing is pretty widespread and they're advertised as a private provider. i'd consider proton a safe, inoffensive choice. they have zero-access encryption, meaning that they can't see your emails and other content.

i believe you can get up to 1GB of email storage for free. the main thing that puts me off from proton is that they don't offer email client support for free accounts, but that might not matter to some.

#### [disroot](https://disroot.org)

disroot is a platform running many free online services, including email. i believe this organization is a nonprofit. your mail is encrypted as well, providing as much privacy as possible.

you get 1GB of email storage for free. i don't think they support 2FA for email, which can be a dealbreaker for some. i personally have found using disroot's email to be smooth — i haven't experienced any outages or problems at all. they have client support too! accounts do require manual approval, which can take ~48 hours, and registration is closed on the weekends. regardless, i think disroot is a pretty good email provider — you'll probably see them pop up in some other sections as well

#### paid options

some paid email services i've seen include [posteo](https://posteo.de/en) and [mailbox.org](https://mailbox.org/en/). if you're interested, please look into them! i do know that posteo (only?) takes money through mail — if you're outside of europe, i'm unsure if it's a viable solution.

### instant messaging

#### [signal](https://signal.org/)

ah, signal! i'd describe it as "whatsapp but more private". it's quite user-friendly and intuitive to use, and has many quality-of-life or fun features that you'd expect in a chat app. i'm pretty sure they've receieved legal orders to disclose all known user information, and all they could give was phone numbers. do fact check me on that, though

a phone number is required to sign up. you can add others by phone numbers or optional usernames, and you can control who can find you by number. overall, a good tool that you may be already using and that shouldn't be too hard to convince others to switch to.

#### [matrix](https://matrix.org/)

matrix requires _slightly_ more technical understanding than the average person might have, but i'm still recommending it anyway. matrix is "an open network for secure, decentralised communication" — in short, anybody can run a matrix server and people on different servers can communicate with each other. i'd say it works a bit more like discord than a traditional chat app.

[here](https://servers.joinmatrix.org/)'s a community-curated list of matrix instances. i'd advise against registering on the official matrix.org instance, as the more centralized it is, the more people that are affected if the "main" instance goes down. it's up to you, but choose an instance you feel you can trust!

due to the nature of matrix, there's no "official" client. [here](https://matrix.org/ecosystem/clients/)'s a list of clients. [element](https://element.io/) is by far the most popular client, though — from my experience, it seems intuitive enough, and supports many of the matrix features.

## browsing

### browsers

for desktop, firefox and firefox-based browsers are my recommendation. the privacy is okay out-of-the-box, but there are some things you can do to make it better.

#### vanilla firefox

firefox collects **anonymous, aggregated** usage data to give to advertisers or for technical use. [here's how you can turn that off](https://support.mozilla.org/en-US/kb/telemetry-clientid).

if you have more technical knowledge, i've heard good things about [arkenfox](https://github.com/arkenfox/user.js), which is a firefox configuration to make it more privacy friendly. this seems like it takes quite a bit of time and effort to set up, though. [betterfox](https://github.com/yokoffing/Betterfox) does something similar, but the documentation seems a bit more beginner-friendly.

#### [librewolf](https://librewolf.net/)

librewolf is a fork of firefox, meaning the developers have taken the firefox code and modified it to fit their project's goals. librewolf has "saner", more privacy-respecting defaults. however, some of these changes can be annoying to casual users. here are some tips:

librewolf deletes your browser history when you close the browser. this can be changed in normal settings, by unticking the box "clear history when librewolf closes" under the history section.

due to use of RPF (resist fingerprinting), the browser will tell websites that your system is in light mode. if you want sites to follow your device's preference, you can disable RPF by going to about:config and changing privacy.resistFingerprinting to false. if you do this, i'd suggest getting an extension such as [chameleon](https://addons.mozilla.org/en-US/firefox/addon/chameleon-ext/) to get at least some fingerprinting protection.

librewolf won't save your passwords — not a huge deal, use a password manager. you shouldn't be saving your passwords exclusively in your browser anyhow.

#### mobile

if you're on iOS, use safari with [adguard](https://apps.apple.com/us/app/adguard-adblock-privacy/id1047223162). if you're on android, i've heard good things about firefox for android or [mull](https://divestos.org/pages/our_apps#mull), which is firefox-based with some alterations.

### browser extensions

[ublock origin](https://ublockorigin.com/) is **essential**. it's available on firefox for android as well. i'd also recommend [privacy badger](https://privacybadger.org/), which blocks trackers, [don't track me google](https://addons.mozilla.org/en-US/firefox/addon/dont-track-me-google1/), which converts google's tracking links to normal links, and [decentraleyes](https://decentraleyes.org/), which protects from trackers as well. these three are also available for android! how wonderful

### search engines

now that you're a bit more protected from trackers, google should be generally safe to use, but there are a plethora of reasons you wouldn't want to use it (not wanting to support a shitty company, etc.)

duckduckgo is widely recommended. i don't use it as my main search engine, as i find that the results aren't quite what i'm looking for. do test on your own, though. i personally use [brave search](https://search.brave.com/), which while not the best, i find delivers decent results. i believe both these tools have AI shit involved, which you should be able to disable.

[searxng](https://searxng.org/) is a metasearch engine, meaning it aggregates results from other engines. it's very privacy-respecting and can be self-hosted. the results are decent, i think — i used to use it. [here](https://searx.space/)'s a list of public instances.

### front-ends

a lot of websites have a shit ton of trackers and/or are bloated as hell. using alternate front-ends may be worth considering. these take data from the site that you're trying to visit, and display it in a less bloated, more privacy-respecting manner. [here](https://github.com/mendel5/alternative-front-ends) is a list of some! [private.coffee](https://private.coffee/) is wonderful and has a bunch of hosted front-ends. if you're planning on using these on the regular, i'd also recommend the [libredirect](https://addons.mozilla.org/en-US/firefox/addon/libredirect/) extension to automatically redirect URLs.

### VPNs

VPNs do not provide full anonymity, but can give you some extra encryption when you're surfing the net (or when you're pirating movies and don't want your ISP on your ass).

#### [riseup](https://riseup.net/en/vpn)

riseup is a nonprofit that provides a handful of services including VPN. this is my recommendation if you're not in a position to pay for a VPN

#### [mullvad](https://mullvad.net/en/vpn)

never used this, but i've heard it widely recommended. five euros a month, relatively affordable, and externally audited.

## online file management

### cloud storage

#### [nextcloud](https://nextcloud.com/)

nextcloud is self-hosted cloud storage. if you're not in the position to self-host, i can recommend [the good cloud](https://thegood.cloud/) and [disroot](https://disroot.org) as providers — most providers give you up to 2GB of storage. there are extensions (?) for a bunch of stuff such as documents, contacts, kanban, music, even recipe books. you can also sync to your devices.

#### [filen](https://filen.io/)

filen's also solid. you can get 10GB by default, 20GB if you sign up with someone else's referral link, and up to 50GB by recruiting your poor friends. [here's my link](https://filen.io/r/495b64c3641b275e3f7bde7b8a7edca9)

your files are end-to-end encrypted, meaning the provider can't see your files. as i'm writing this, the service seems to be missing some functionality — there doesn't seem to be webdav support. as of may 2024, [this looks to be in the works](https://blog.filen.io/status-update-23-05-2024/)

### document storage

some nextcloud providers come with open/onlyoffice integration, meaning you can edit office documents and spreadsheets and stuff.

[cryptpad](https://cryptpad.org/) is also a good option — [here](https://cryptpad.org/instances/) are some public instances. i personally am a fan of [private.coffee's instance](https://cryptpad.private.coffee/) which has some extra file types (more open/onlyoffice integration i think) and gives you 5GB (!!!) of storage for free. i do find that cryptpad can be a bit slow at times, though, but that could also be a me thing.

if you can help it, though, it may be worth considering working with your files locally and syncing them using a cloud service. i do get that not everyone can/wants to do that though

### file sharing

![xkcd comic of a person discussing with their friend how to receive a file from their cousin, suggesting multiple convoluted solutions until the cousin just drives over with an USB drive](https://imgs.xkcd.com/comics/file_transfer.png)

#### cloud-based

with cloud-based tools, you first upload your file to a server, and your recipient can download from the server.

1. [send](https://send.vis.ee/)\
   this project is a fork of a discontinued mozilla project. the files are end-to-end encrypted and you can set expiry conditions and passwords.
1. [lufi](https://framagit.org/fiat-tux/hat-softwares/lufi)\
   this works pretty much identically to send. [here](https://alt.framasoft.org/en/framadrop)'s a short list of pubic instances (mostly french). [disroot's got an instance](https://upload.disroot.org/)!

#### torrent-based

with torrent-based tools, your file is sent directly from your device to the recipient's

the only one i really have experience with is [toffeeshare](https://toffeeshare.com/). from my experience, it works fine, but can be a bit slow depending on your and your recipient's internet connections. your files are end-to-end encrypted.

## afterword

i _believe_ i've covered the basic basics here. if anything i talked about is interesting to you, do look into them and take a look at the resources i linked at the top. there's most likely stuff i missed, but hopefully this is a good starting point!

if you've got questions or anything, feel free to shoot me an email!
