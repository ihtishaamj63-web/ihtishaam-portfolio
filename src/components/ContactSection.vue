<template>
  <section id="contact" class="section contact">
    <div class="wrap">
      <div class="section-head">
        <h2>Contact</h2>
      </div>
      <p class="pitch">
        Open to work across software, data, security, and the spaces where science and code meet.
      </p>

      <p class="big-email">{{ links.displayEmail }}</p>

      <form class="contact-form" @submit.prevent="sendMessage">
        <div class="form-fields">
          <label>
            <span>Name</span>
            <input v-model="form.name" name="name" autocomplete="name" required />
          </label>
          <label>
            <span>Email</span>
            <input
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required
            />
          </label>
          <label class="message-field">
            <span>Message</span>
            <textarea v-model="form.message" name="message" rows="3" required></textarea>
          </label>
        </div>
        <div class="form-actions">
          <button class="send-button" type="submit" :disabled="isSending">
            {{ isSending ? 'Sending...' : 'Send message' }}
          </button>
        </div>
        <p
          v-if="submissionMessage"
          class="form-status"
          :class="`form-status--${submissionState}`"
          role="status"
          aria-live="polite"
        >
          {{ submissionMessage }}
        </p>
      </form>

      <ul class="contact-list">
        <li>
          <a
            :href="links.github"
            target="_blank"
            rel="noopener"
            @mouseenter="showHint('Visit GitHub')"
            @mouseleave="hideHint()"
            @focus="showHint('Visit GitHub')"
            @blur="hideHint()"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            :href="links.linkedin"
            target="_blank"
            rel="noopener"
            @mouseenter="showHint('Visit LinkedIn')"
            @mouseleave="hideHint()"
            @focus="showHint('Visit LinkedIn')"
            @blur="hideHint()"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"
              ></path>
            </svg>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1lKFOIpVViVoFyMr6fkwS4RDZhUvjgT_eV_Q5Y4AuApM/edit?usp=sharing"
            target="_blank"
            rel="noopener"
            aria-label="View CV"
            @mouseenter="showHint('Open my CV')"
            @mouseleave="hideHint()"
            @focus="showHint('Open my CV')"
            @blur="hideHint()"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6M8 13h8M8 17h8" />
            </svg>
            <span>CV</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { links } from '../data/links'
import { useCursorHint } from '../composables/useCursorHint'

const { showHint, hideHint } = useCursorHint()
const form = reactive({ name: '', email: '', message: '' })
const isSending = ref(false)
const submissionState = ref('')
const submissionMessage = ref('')

async function sendMessage() {
  isSending.value = true
  submissionState.value = ''
  submissionMessage.value = ''

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(links.displayEmail)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _replyto: form.email.trim(),
          _subject: `Portfolio enquiry from ${form.name.trim()}`,
        }),
      },
    )
    const result = await response.json()

    if (!response.ok || (result.success !== 'true' && result.success !== true)) {
      submissionState.value = 'error'
      submissionMessage.value = result.message || 'The message could not be sent. Please try again.'
      return
    }

    submissionState.value = 'success'
    submissionMessage.value = 'Thanks for reaching out. Your message has been sent.'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    console.error('Contact form submission failed:', error)
    submissionState.value = 'error'
    submissionMessage.value = 'Unable to send your message right now. Please try again later.'
  } finally {
    isSending.value = false
  }
}
</script>

<style scoped>
.contact {
  background: var(--paper-deep);
  border-top-color: var(--line);
  color: var(--ink);
  padding-top: 64px;
  padding-bottom: 72px;
}

.contact .section-head {
  margin-bottom: 32px;
}

.contact .section-head h2 {
  text-decoration-color: var(--ink);
}

.pitch {
  font-family: var(--serif);
  font-size: clamp(23px, 3vw, 32px);
  line-height: 1.25;
  max-width: 32ch;
  margin-bottom: 30px;
}

.big-email {
  display: block;
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(23px, 3.6vw, 38px);
  letter-spacing: -0.01em;
  border-bottom: 2px solid var(--green);
  padding-bottom: 4px;
  margin-bottom: 30px;
  word-break: break-all;
}

.contact-form {
  max-width: 660px;
  margin: 0 0 34px;
  padding: 22px;
  border: 1px solid var(--line);
}

.form-fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 20px;
}

.form-fields label {
  display: grid;
  gap: 6px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.form-fields input,
.form-fields textarea {
  width: 100%;
  padding: 9px 0;
  border: 0;
  border-bottom: 1px solid var(--ink-soft);
  border-radius: 0;
  background: transparent;
  color: var(--ink);
  font: 15px/1.5 var(--sans);
  resize: vertical;
}

.form-fields input:focus,
.form-fields textarea:focus {
  outline: 0;
  border-bottom-color: var(--green);
}

.form-fields input:focus-visible,
.form-fields textarea:focus-visible {
  box-shadow: 0 2px 0 var(--green);
}

.form-fields input::placeholder,
.form-fields textarea::placeholder {
  color: var(--ink-soft);
}

.message-field {
  grid-column: 1 / -1;
}

.form-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px 18px;
  margin-top: 20px;
}

.form-status {
  margin-top: 14px;
  font-family: var(--mono);
  font-size: 12px;
}

.form-status--success {
  color: var(--green);
}

.form-status--error {
  color: #a33224;
}

.send-button {
  padding: 10px 14px;
  background: var(--green);
  color: var(--paper);
  font-family: var(--mono);
  font-size: 12px;
  transition: background-color 0.15s ease;
}

.send-button:disabled {
  cursor: wait;
  opacity: 0.7;
}

.send-button:hover {
  background: var(--ink);
}

.contact-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.contact-list a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  border: 1px solid var(--green);
  text-decoration: none;
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.03em;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

.contact-list a:hover {
  background: var(--green);
  color: var(--paper);
}

.contact-list a:focus-visible {
  outline-color: var(--green);
}

.contact-list svg {
  width: 17px;
  height: 17px;
  flex: none;
}

@media (max-width: 520px) {
  .contact-form {
    padding: 16px;
  }

  .form-fields {
    grid-template-columns: 1fr;
  }

  .message-field {
    grid-column: auto;
  }
}
</style>
