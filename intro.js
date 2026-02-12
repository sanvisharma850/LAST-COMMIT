// Scene timing configuration (in milliseconds)
const SCENE_TIMINGS = {
    0: 6000,   // Opening text
    1: 8000,   // The Room
    2: 9000,   // Systems Disagree
    3: 8000,   // The Commit
    4: 7000,   // The Warning
    5: 4000,   // Suspect Montage (fast cuts)
    6: null    // Final scene - stays until button click
};

// Audio management
const audio = {
    ambient: document.getElementById('ambient'),
    heartbeat: document.getElementById('heartbeat'),
    glitch: document.getElementById('glitch'),
    terminalBuzz: document.getElementById('terminal-buzz'),
    click: document.getElementById('click'),
    hum: document.getElementById('hum')
};

let currentScene = 0;
let isTransitioning = false;
let audioInitialized = false;

// Initialize on load
window.addEventListener('load', () => {
    showClickToStart();
});

// Show "Click to Start" overlay
function showClickToStart() {
    const overlay = document.createElement('div');
    overlay.id = 'start-overlay';
    overlay.innerHTML = `
        <div style="text-align: center;">
            <h1 style="font-family: 'Creepster', cursive; font-size: 4rem; color: #8b0000; text-shadow: 0 0 20px rgba(139,0,0,0.8); margin-bottom: 2rem; animation: pulse 2s infinite;">
                LAST COMMIT
            </h1>
            <p style="font-size: 1.5rem; color: #fff; margin-bottom: 3rem;">
                Click anywhere to begin
            </p>
            <p style="font-size: 1rem; color: #666; font-style: italic;">
                🎧 Headphones recommended
            </p>
        </div>
    `;
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    document.body.appendChild(overlay);
    
    // Start on click
    overlay.addEventListener('click', () => {
        initializeAudio();
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 1s';
        setTimeout(() => {
            overlay.remove();
            startIntro();
        }, 1000);
    });
}

function initializeAudio() {
    if (audioInitialized) return;
    audioInitialized = true;
    
    // Set initial volumes
    audio.ambient.volume = 0.3;
    audio.heartbeat.volume = 0;
    audio.glitch.volume = 0;
    audio.terminalBuzz.volume = 0;
    audio.hum.volume = 0.2;
    
    // Start ambient and hum
    audio.ambient.play().catch(e => console.log('Ambient blocked:', e));
    audio.hum.loop = true;
    audio.hum.play().catch(e => console.log('Hum blocked:', e));
    
    console.log('🎵 Audio initialized');
}

function startIntro() {
    console.log('🎬 Intro started');
    // Begin scene progression
    progressScenes();
}

function progressScenes() {
    if (isTransitioning) return;
    
    const scenes = document.querySelectorAll('.scene');
    const timing = SCENE_TIMINGS[currentScene];
    
    console.log(`📍 Scene ${currentScene} started`);
    
    // Scene-specific audio and effects
    handleSceneAudio(currentScene);
    
    // If this is the final scene, wait for button click
    if (currentScene === 6) {
        setupFinalButton();
        return;
    }
    
    // Progress to next scene after timing
    if (timing) {
        setTimeout(() => {
            transitionToNextScene(scenes);
        }, timing);
    }
}

function transitionToNextScene(scenes) {
    if (currentScene >= scenes.length - 1) return;
    
    isTransitioning = true;
    
    // Fade out current scene
    scenes[currentScene].classList.remove('active');
    
    // Fade in next scene
    setTimeout(() => {
        currentScene++;
        scenes[currentScene].classList.add('active');
        isTransitioning = false;
        
        // Continue progression
        progressScenes();
    }, 1500);
}

function handleSceneAudio(sceneIndex) {
    switch(sceneIndex) {
        case 0: // Opening - just ambient
            console.log('🎵 Scene 0: Ambient only');
            break;
            
        case 1: // The Room - heartbeat
            console.log('🎵 Scene 1: Heartbeat at 3s');
            setTimeout(() => {
                audio.heartbeat.volume = 0.6;
                audio.heartbeat.currentTime = 0;
                audio.heartbeat.play().then(() => {
                    console.log('💓 Heartbeat playing');
                }).catch(e => console.log('Heartbeat error:', e));
            }, 3000);
            break;
            
        case 2: // Systems Disagree - glitch effects
            console.log('🎵 Scene 2: Glitch effects');
            setTimeout(() => {
                audio.glitch.volume = 0.4;
                audio.glitch.currentTime = 0;
                audio.glitch.play().then(() => {
                    console.log('⚡ Glitch 1 playing');
                }).catch(e => console.log('Glitch error:', e));
            }, 4000);
            
            setTimeout(() => {
                audio.glitch.currentTime = 0;
                audio.glitch.play().then(() => {
                    console.log('⚡ Glitch 2 playing');
                }).catch(e => console.log('Glitch error:', e));
            }, 6000);
            break;
            
        case 3: // The Commit - terminal buzz
            console.log('🎵 Scene 3: Terminal buzz');
            setTimeout(() => {
                audio.terminalBuzz.volume = 0.3;
                audio.terminalBuzz.currentTime = 0;
                audio.terminalBuzz.play().then(() => {
                    console.log('💻 Terminal buzz playing');
                }).catch(e => console.log('Terminal buzz error:', e));
            }, 2000);
            break;
            
        case 4: // The Warning - whisper effect (pitch down ambient)
            console.log('🎵 Scene 4: Ambient pitch down');
            audio.ambient.playbackRate = 0.7;
            setTimeout(() => {
                audio.ambient.playbackRate = 1;
            }, 5000);
            break;
            
        case 5: // Suspect Montage - rapid glitches
            console.log('🎵 Scene 5: Rapid glitches');
            for (let i = 0; i < 4; i++) {
                setTimeout(() => {
                    audio.glitch.volume = 0.5;
                    audio.glitch.currentTime = 0;
                    audio.glitch.play().then(() => {
                        console.log(`⚡ Montage glitch ${i+1} playing`);
                    }).catch(e => console.log('Montage glitch error:', e));
                }, i * 600);
            }
            break;
            
        case 6: // Final scene - stabilize
            console.log('🎵 Scene 6: Ambient stabilized');
            audio.ambient.volume = 0.2;
            break;
    }
}

function setupFinalButton() {
    const button = document.getElementById('enter-button');
    
    button.addEventListener('mouseenter', () => {
        audio.hum.volume = 0.4;
        audio.hum.playbackRate = 1.2;
    });
    
    button.addEventListener('mouseleave', () => {
        audio.hum.volume = 0.2;
        audio.hum.playbackRate = 1;
    });
    
    button.addEventListener('click', () => {
        console.log('🎮 Starting game...');
        
        audio.click.volume = 0.5;
        audio.click.play();
        
        // Glitch effect on click
        audio.glitch.volume = 0.6;
        audio.glitch.currentTime = 0;
        audio.glitch.play();
        
        // Fade out all audio
        fadeOutAudio();
        
        // Screen distortion effect
        document.body.style.animation = 'screen-distort 1s ease';
        
        // Transition to game
        setTimeout(() => {
            window.location.href = './institute-verify/index.html';
        }, 1500);
    });
}

function fadeOutAudio() {
    const fadeInterval = setInterval(() => {
        let allQuiet = true;
        Object.values(audio).forEach(sound => {
            if (sound.volume > 0.05) {
                sound.volume -= 0.05;
                allQuiet = false;
            } else {
                sound.pause();
            }
        });
        if (allQuiet) {
            clearInterval(fadeInterval);
        }
    }, 100);
}

// Screen distortion on final transition
const style = document.createElement('style');
style.textContent = `
    @keyframes screen-distort {
        0% { filter: none; }
        25% { filter: hue-rotate(90deg) blur(2px); }
        50% { filter: hue-rotate(180deg) blur(5px) contrast(2); }
        75% { filter: hue-rotate(270deg) blur(2px); }
        100% { filter: brightness(0); }
    }
`;
document.head.appendChild(style);

// Custom cursor tracking
document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--mouse-x', e.clientX + 'px');
    document.body.style.setProperty('--mouse-y', e.clientY + 'px');
});

// Additional glitch effects on random intervals
setInterval(() => {
    if (currentScene > 0 && currentScene < 6) {
        const randomGlitch = Math.random();
        if (randomGlitch > 0.92) {
            const bloodVignette = document.querySelector('.blood-vignette');
            bloodVignette.style.opacity = '0.8';
            
            // Quick glitch sound
            if (audio.glitch && audioInitialized) {
                const tempGlitch = audio.glitch.cloneNode();
                tempGlitch.volume = 0.2;
                tempGlitch.play().catch(e => {});
            }
            
            setTimeout(() => {
                bloodVignette.style.opacity = '0.3';
            }, 200);
        }
    }
}, 5000);

// Prevent accidental page exit during intro
window.addEventListener('beforeunload', (e) => {
    if (currentScene < 6) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Skip intro on spacebar press (for testing/impatient users)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && currentScene < 6) {
        e.preventDefault();
        console.log('⏭️ Skipping to final scene');
        const scenes = document.querySelectorAll('.scene');
        scenes[currentScene].classList.remove('active');
        currentScene = 6;
        scenes[currentScene].classList.add('active');
        setupFinalButton();
    }
});

// Console easter egg
console.log('%c⚠️ CASE FILE ACCESSED', 'color: #8b0000; font-size: 20px; font-weight: bold;');
console.log('%cSystems don\'t forget. They just wait.', 'color: #666; font-style: italic;');
console.log('%cPress SPACE to skip intro', 'color: #444; font-size: 12px;');