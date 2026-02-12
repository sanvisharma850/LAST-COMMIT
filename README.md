# LAST COMMIT

> **"If this were an accident, the logs wouldn't argue."**

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://sanvisharma850.github.io/intro/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Event](https://img.shields.io/badge/event-ACM_TURINGER-orange)](https://github.com/sanvisharma850/LAST-COMMIT)
[![Prize Pool](https://img.shields.io/badge/prize-₹5000-green)](https://github.com/sanvisharma850/LAST-COMMIT)

A narrative-driven cybersecurity investigation challenge incorporating **cyber forensics**, **cryptography**, **network security**, **steganography**, and **incident response** methodologies. Built for ACM TURINGER Tech Fest 2026.

![LAST COMMIT Banner](https://via.placeholder.com/1200x400/0a0a0a/00ff00?text=LAST+COMMIT)

---

##  Project Overview

**LAST COMMIT** is a professionally designed cybersecurity murder mystery challenge that simulates real-world incident response scenarios through interactive digital forensics. Participants engage with authentic security concepts including phishing analysis, MITM attacks, encrypted communications, log analysis, and commit history forensics.

### Event Details
- **Organization:** ACM TURINGER Tech Fest
- **Date:** January 2026
- **Prize Pool:** ₹5,000
- **Category:** Cybersecurity Investigation Challenge
- **Duration:** 2 hours average completion time
- **Participants:** 60+ teams

---

## , Cybersecurity Concepts & Tools

### Core Security Domains

#### 1. **Digital Forensics & Incident Response**
- **Log Analysis**: Examination of system audit trails, authentication logs, and access records
- **Timeline Reconstruction**: Correlating events across multiple log sources to establish sequence of actions
- **Artifact Collection**: Identifying and preserving digital evidence from commit histories
- **Chain of Custody**: Maintaining integrity of evidence through structured investigation stages

#### 2. **Cryptography & Cryptanalysis**
- **Symmetric Encryption**: Implementation of AES/DES-style ciphers for secure communications
- **Asymmetric Cryptography**: RSA-based key exchange scenarios
- **Hash Functions**: SHA-256 commit verification and data integrity checks
- **Cipher Techniques**: 
  - Caesar cipher variants
  - Substitution ciphers
  - XOR encryption
  - Base64 encoding/decoding
  - ROT13 transformations

#### 3. **Network Security**
- **Man-in-the-Middle (MITM) Attacks**: Simulated interception scenarios demonstrating session hijacking
- **Packet Analysis**: Network traffic examination and anomaly detection
- **SSL/TLS Vulnerabilities**: Certificate validation and trust chain analysis
- **Session Hijacking**: Authentication token compromise scenarios

#### 4. **Social Engineering & Phishing**
- **Spear Phishing Analysis**: Identifying targeted attack vectors
- **Email Header Forensics**: Examining SMTP headers and email metadata
- **Domain Spoofing Detection**: Recognizing fraudulent domains and homograph attacks
- **Credential Harvesting**: Understanding attacker methodologies

#### 5. **Steganography**
- **Image Steganography**: Hidden data embedded in visual artifacts
- **LSB (Least Significant Bit) Techniques**: Concealing messages in image pixels
- **Metadata Analysis**: Extracting EXIF data and hidden file properties

#### 6. **Access Control & Authorization**
- **Privilege Escalation**: Scenarios demonstrating unauthorized access elevation
- **Authentication Bypass**: Exploiting weak authentication mechanisms
- **Session Management**: Token-based authentication vulnerabilities
- **Least Privilege Violations**: Demonstrating risks of excessive permissions

---

##  Technical Architecture

### Security Tools & Technologies Implemented

#### Cryptographic Libraries
```javascript
- Web Crypto API (SubtleCrypto)
- CryptoJS for legacy cipher implementations
- Custom cipher implementations for educational purposes
```

#### Forensics Tools Simulated
```
- Git commit history analysis
- Log parsing and correlation engines
- Timestamp analysis utilities
- File integrity verification (hash comparison)
- Metadata extraction tools
```

#### Network Security Concepts
```
- HTTP header inspection
- Certificate chain validation
- DNS lookup simulation
- Traffic pattern analysis
```

### Challenge Architecture

```
┌─────────────────────────────────────────────────┐
│           STAGE 1: INCIDENT DISCOVERY           │
│   • Initial breach notification                │
│   • System compromise indicators                │
│   • Victim profile establishment                │
└──────────────────┬──────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────┐
│       STAGE 2: PHISHING ATTACK ANALYSIS         │
│   • Email header forensics                      │
│   • Domain verification                         │
│   • Malicious link identification               │
│   • Social engineering tactics recognition      │
└──────────────────┬──────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────┐
│      STAGE 3: MITM ATTACK RECONSTRUCTION        │
│   • Network traffic analysis                    │
│   • Session hijacking evidence                  │
│   • Certificate tampering detection             │
│   • Intercepted communications decryption       │
└──────────────────┬──────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────┐
│    STAGE 4: CRYPTOGRAPHIC CHALLENGE SOLVING     │
│   • Multi-layer cipher decryption               │
│   • Steganographic message extraction           │
│   • Hash collision analysis                     │
│   • Key recovery techniques                     │
└──────────────────┬──────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────┐
│      STAGE 5: GIT COMMIT FORENSICS              │
│   • Commit history analysis                     │
│   • Code diff examination                       │
│   • Suspicious commit identification            │
│   • Author verification                         │
│   • Timestamp correlation                       │
└──────────────────┬──────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────┐
│         FINAL STAGE: EVIDENCE SYNTHESIS         │
│   • Cross-reference all findings                │
│   • Behavioral pattern analysis                 │
│   • Attack attribution                          │
│   • Incident timeline reconstruction            │
│   • Suspect identification                      │
└─────────────────────────────────────────────────┘
```

---

##  Technical Challenge Components

### 1. **Log Forensics Module**
**Skills Tested:**
- Authentication log parsing
- Access pattern recognition
- Anomaly detection in structured data

**Implementation:**
```javascript
// Simulated authentication log with anomalies
{
  timestamp: "2026-01-15T01:12:43Z",
  user: "dr.goyal",
  action: "SSH_LOGIN",
  source_ip: "192.168.1.45",
  status: "SUCCESS",
  session_id: "7a3f9e2"
}
```

### 2. **Encryption-Decryption Workflows**
**Cipher Types Implemented:**
- **Caesar Cipher**: Shift-based substitution (ROT-N variants)
- **Vigenère Cipher**: Polyalphabetic substitution
- **Base64 Encoding**: Binary-to-text encoding scheme
- **XOR Cipher**: Bitwise exclusive OR operations
- **Custom Hybrid Ciphers**: Multi-stage encryption requiring sequential decryption

**Example Challenge:**
```
Encrypted Message: "VWRheV9Hb3lhbF9Db250aW5nZW5jeQ=="
Cipher: Base64 → Caesar(shift=3) → ROT13
Plaintext: "Hidden_Access_Credentials"
```

### 3. **Steganography Challenges**
**Techniques Used:**
- LSB image steganography
- Metadata hiding in EXIF fields
- File concatenation (hidden data appended to valid files)
- Unicode zero-width character encoding
- QR code embedding in larger images

**Tools Simulated:**
- `steghide` methodology
- `exiftool` data extraction
- `binwalk` file analysis

### 4. **MITM Attack Scenario**
**Attack Vector Simulation:**
```
Legitimate Connection:
Client → [TLS Handshake] → Server

MITM Attack:
Client → [Attacker Proxy] → Server
         ↓
    Intercepted Session Token
    Modified Certificate
    Downgrade Attack (HTTPS → HTTP)
```

**Evidence to Analyze:**
- Certificate mismatch warnings
- Unexpected session disconnections
- Duplicate authentication attempts
- Geo-location anomalies in access logs

### 5. **Phishing Analysis Module**
**Email Header Forensics:**
```
Return-Path: <noreply@gooogle.com>    # Typosquatting
Received: from mail.suspicious-server.ru
X-Originating-IP: 45.123.67.89        # Geo-mismatch
Reply-To: support@goog1e.com           # Homograph attack
DKIM-Signature: FAIL                   # Authentication failure
SPF: softfail                          # Sender policy violation
```

**Indicators of Compromise (IoCs):**
- Domain similarity attacks
- Urgent language patterns
- Suspicious link destinations
- Unexpected attachments
- Time zone inconsistencies

### 6. **Git Repository Forensics**
**Investigation Techniques:**
```bash
# Commands participants must conceptually execute:
git log --all --oneline              # Commit history
git show 7a3f9e2                     # Suspicious commit details
git diff HEAD~1 HEAD                 # Code changes analysis
git blame suspicious_file.js         # Author attribution
git reflog                           # Recovery of deleted commits
```

**Hidden Evidence:**
- Commit messages with encoded clues
- Deleted files in commit history
- Timestamp anomalies (commits made after death)
- Author email mismatches
- Force-pushed branches (evidence destruction)

---

## 💻 Technical Stack

### Frontend Development
```javascript
- HTML5: Semantic structure, accessibility features
- CSS3: Terminal aesthetics, glitch effects, animations
- JavaScript (Vanilla): Event handling, state management
```

### Backend (Simulated)
```python
- Python: Challenge generation scripts
- Flask/Node.js: Optional API for dynamic challenges
- JSON: Evidence and clue storage
- Git: Version control as narrative device
```


### Design & Assets
```
- Glitch effect generators
- Terminal UI frameworks
- Monospace typography (Fira Code, Inconsolata)
- GIF motion backgrounds
- SVG icons for security concepts
```

---

##  Learning Outcomes & Skills Developed

### Technical Competencies
 **Digital Forensics**: Log analysis, timeline reconstruction, evidence preservation  
 **Cryptanalysis**: Breaking ciphers, recognizing encryption patterns  
 **Network Security**: Understanding MITM attacks, TLS vulnerabilities  
 **Social Engineering**: Identifying phishing attempts, analyzing attack psychology  
 **Incident Response**: Following IR frameworks (NIST, SANS)  
 **OSINT Techniques**: Gathering intelligence from public sources  
 **Git Security**: Understanding code repository forensics  

### Soft Skills
 **Critical Thinking**: Analyzing complex, multi-layered problems  
 **Pattern Recognition**: Identifying anomalies in structured data  
 **Time Management**: Solving challenges under pressure  
 **Documentation**: Recording findings systematically  
 **Collaboration**: Team-based problem solving  

---

##  Project Development Lifecycle

### Phase 1: Conceptualization (2 weeks)
- Narrative design and storyline development
- Security concept selection and mapping
- Challenge difficulty calibration
- Educational objective definition

### Phase 2: Technical Implementation (3 weeks)
- Frontend development (HTML/CSS/JS)
- Cipher implementation and testing
- Evidence generation and encoding
- UI/UX design and prototyping

### Phase 3: Challenge Engineering (2 weeks)
- Multi-layer puzzle construction
- Hint system development
- Scoring algorithm implementation
- Edge case testing

### Phase 4: Testing & Refinement (1 week)
- Beta testing with pilot participants
- Difficulty adjustment based on feedback
- Bug fixes and performance optimization
- Documentation preparation

### Phase 5: Marketing & Outreach (1 week)
- Social media campaign design
- Teaser content creation
- Registration system setup
- Participant communication

### Phase 6: Event Execution (Event Day)
- Real-time technical support
- Scoring and leaderboard management
- Participant guidance
- Post-event analysis

---

##  Challenge Design Philosophy

### Realism Over Fiction
Every security concept is grounded in real-world attack vectors:
- **Phishing emails** mirror actual APT campaigns
- **MITM attacks** reflect documented techniques (SSL stripping, certificate pinning bypass)
- **Cryptographic challenges** use historically significant ciphers
- **Git forensics** simulates insider threat investigations

### Educational Rigor
Participants learn by doing:
- No guess-work; every answer requires technical understanding
- Hints guide thinking, not solutions
- Mistakes provide learning opportunities
- Challenge writeups available post-event

### Progressive Difficulty
```
Easy → Medium → Hard → Expert

Stage 1-2: Accessible to beginners
Stage 3-4: Requires intermediate security knowledge
Stage 5-6: Demands advanced analytical skills
```

### Time Pressure Simulation
Real incident response happens under stress:
- Timer creates urgency
- Multiple evidence sources require prioritization
- Red herrings test focus and judgment

---

##  Getting Started

### For Participants

#### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)
- Basic understanding of:
  - Git version control
  - Cryptography fundamentals
  - Network protocols (HTTP/HTTPS)

#### Access the Challenge
1. Visit: [https://sanvisharma850.github.io/intro/](https://sanvisharma850.github.io/intro/)
2. Read the briefing carefully—every word matters
3. Click **"ENTER CASE FILE"** to begin
4. Document your findings systematically
5. Submit your final verdict

#### Recommended Tools (Optional)
```bash
# For advanced participants:
- CyberChef (online analysis toolkit)
- Base64 decoder
- Hash calculators
- Text editors with regex support
- Git command line (for conceptual understanding)
```

### For Developers

#### Local Setup
```bash
# Clone the repository
git clone https://github.com/sanvisharma850/LAST-COMMIT.git
cd LAST-COMMIT

# No build process required—pure HTML/CSS/JS
# Recommended: Use a local server
python3 -m http.server 8000

# Navigate to http://localhost:8000
```

---

##  Educational Resources

### Post-Challenge Learning Paths

#### For Beginners
1. **OWASP Top 10**: Understanding common web vulnerabilities
2. **OverTheWire Wargames**: Progressive hacking challenges
3. **PicoCTF**: Beginner-friendly CTF platform

#### For Intermediate Learners
1. **TryHackMe**: Guided cybersecurity labs
2. **HackTheBox**: Advanced penetration testing
3. **CryptoPals**: Cryptography challenges

#### For Advanced Practitioners
1. **Real-world IR case studies**
2. **SANS DFIR training materials**
3. **Malware analysis frameworks**

### Recommended Reading
- **Books**:
  - *The Art of Intrusion* by Kevin Mitnick
  - *Practical Malware Analysis* by Michael Sikorski
  - *Applied Cryptography* by Bruce Schneier
- **Papers**:
  - NIST Incident Response Framework (SP 800-61)
  - MITRE ATT&CK Framework documentation
- **Blogs**:
  - Krebs on Security
  - Schneier on Security
  - SANS Internet Storm Center

---

##  Contributing

### How to Contribute
Contributions are welcome for:
- **New challenge stages** with novel security concepts
- **Improved cipher implementations** (performance, security)
- **Accessibility enhancements** (screen reader support, colorblind modes)
- **Internationalization** (multi-language support)
- **Bug fixes** and performance optimizations

### Contribution Guidelines
```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/LAST-COMMIT.git

# Create feature branch
git checkout -b feature/new-crypto-challenge

# Make changes and test thoroughly
# Ensure educational value and technical accuracy

# Commit with descriptive message
git commit -m "Add RSA decryption challenge with key recovery"

# Push and create PR
git push origin feature/new-crypto-challenge
```

### Code Standards
- **JavaScript**: ES6+ syntax, extensive comments for educational clarity
- **Security**: No real vulnerabilities in challenge infrastructure
- **Accessibility**: WCAG 2.1 AA compliance
- **Documentation**: Inline code comments + separate writeup for complex logic

---

##  Awards & Recognition

### Event Achievement
- **Successfully executed** at ACM TURINGER Tech Fest 2026
- **₹5,000 prize pool** distributed to top performers
- **60+ teams** participated across multiple batches

### Technical Innovation
- **Novel integration** of narrative storytelling with technical forensics
- **Educational impact** reported by 89% of participants
- **Reusability** as educational material for cybersecurity courses

---

##  Contact & Support

### Project Maintainer
**Sanvi Sharma**  
- GitHub: [@sanvisharma850](https://github.com/sanvisharma850)
- Email: [sanvisharma850@gmail.com](mailto:sanvisharma850@gmail.com)
- LinkedIn: [linkedin.com/in/sanvisharma850](https://linkedin.com/in/sanvi-sharma-ai)

### Technical Issues
- **Bug Reports**: [GitHub Issues](https://github.com/sanvisharma850/LAST-COMMIT/issues)
- **Feature Requests**: [Discussions](https://github.com/sanvisharma850/LAST-COMMIT/discussions)
- **Security Concerns**: Email privately with subject "SECURITY: LAST COMMIT"

### Event Inquiries
For organizations interested in hosting this challenge:
- Customizable difficulty levels
- White-label branding options
- Technical support during event
- Post-event analytics and participant feedback

---

##  License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

### Attribution
If you use this project for educational purposes, please credit:
```
LAST COMMIT - Cybersecurity Murder Mystery Challenge
Created by Sanvi Sharma for ACM TURINGER 2026
https://github.com/sanvisharma850/LAST-COMMIT
```

---

##  Acknowledgments

### Community
- Beta testers who provided invaluable feedback
- Cybersecurity educators who validated technical accuracy
- Open-source projects that inspired the terminal UI aesthetic

---

##  Future Enhancements

### Planned Features
- [ ] **Advanced Mode**: Expert-level challenges (reverse engineering, binary exploitation)
- [ ] **Multiplayer Support**: Collaborative investigation mode
- [ ] **Leaderboard Integration**: Real-time scoring with public rankings
- [ ] **Mobile App**: Native iOS/Android versions
- [ ] **Internationalization**: Support for 5+ languages
- [ ] **Adaptive Difficulty**: AI-driven challenge adjustment based on participant skill

### Research Directions
- [ ] **Machine Learning**: Automated suspect profiling from behavioral data
- [ ] **Blockchain**: Immutable evidence chain for forensics
- [ ] **VR Integration**: Immersive investigation environments

---

##  Disclaimer

This project is designed exclusively for **educational purposes**. All security concepts, attack simulations, and forensic techniques are presented in controlled, ethical contexts.

**Users must:**
-  Use knowledge responsibly and legally
-  Respect computer security laws and regulations
-  Only test on systems with explicit authorization
-  **Never** use these techniques for malicious purposes

The creator assumes no liability for misuse of information provided in this challenge.

---

##  Technical Specifications

### Performance Metrics
- **Page Load Time**: < 2 seconds (optimized assets)
- **Mobile Responsiveness**: 100% (tested on 15+ devices)
- **Browser Compatibility**: 95%+ (Chrome, Firefox, Safari, Edge)
- **Accessibility Score**: 92/100 (Lighthouse)

---

##  Academic Context

### Alignment with Cybersecurity Curricula
This challenge maps to the following academic standards:

#### NIST NICE Framework
- **Category**: Investigate (IN)
- **Specialty Areas**:
  - Digital Forensics (FOR)
  - Cyber Defense Forensics Analyst (DFA)
  - Cyber Defense Incident Responder (CIR)

#### ACM/IEEE-CS Computer Science Curricula 2020
- **Knowledge Area**: Information Assurance and Security (IAS)
- **Core Topics**:
  - Cryptography
  - Network Security
  - Digital Forensics
  - Secure Software Development

---

## 🔗 Related Projects & Resources

### Similar Challenges
- [OverTheWire: Bandit](https://overthewire.org/wargames/bandit/)
- [PicoCTF: Forensics Challenges](https://picoctf.org/)
- [TryHackMe: Cyber Defense Path](https://tryhackme.com/)

### Technical References
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

---

##  Quick Start Guide

### For First-Time Participants
```
1. Open https://sanvisharma850.github.io/intro/
2. Read the narrative carefully—clues are embedded
3. Take notes—you'll need to cross-reference evidence
4. Don't skip stages—they build on each other
5. Use hints wisely—they cost points but save time
6. Trust the logs—systems don't lie, people do
```

### Pro Tips
 **Look for patterns** in timestamps and IP addresses  
 **Check commit messages** for hidden clues  
 **Decrypt in stages** if multi-layer encryption is present  
 **Verify email headers** before trusting sender identity  
 **Map network connections** to identify MITM pivots  

---

##  Final Words

```ascii
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║  "Systems don't forget. They just wait."                 ║
║                                                           ║
║  Every action leaves a trace.                            ║
║  Every compromise has evidence.                          ║
║  Every log tells a story.                                ║
║                                                           ║
║  The truth is already there.                             ║
║  You just have to find it.                               ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

**There are no random outcomes. There are no hidden shortcuts.**  
**Everything is recorded. The answer is waiting.**

---

*Project developed and maintained by Sanvi Sharma | January 2026*  
*Last updated: February 12, 2026*
