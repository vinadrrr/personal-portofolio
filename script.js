// Fade the floating social sidebar out once the Contact section is in view.
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('social-sidebar');
  const contactSection = document.getElementById('contact');

  if (!sidebar || !contactSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Contact section reached: hide the sidebar.
          // Set inline styles directly (not Tailwind classes) so this always
          // works regardless of whether script.js is scanned by Tailwind's build.
          sidebar.style.opacity = '0';
          sidebar.style.pointerEvents = 'none';
        } else {
          // Scrolled back up: show it again
          sidebar.style.opacity = '1';
          sidebar.style.pointerEvents = 'auto';
        }
      });
    },
    {
      root: null,
      threshold: 0.1, // trigger once ~10% of the contact section is visible
    }
  );

  observer.observe(contactSection);
});