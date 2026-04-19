const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const storageKey = "glow-up-time-manager-v3";
const reminderStorageKey = "glow-up-reminder-settings-v3";
const notificationLogKey = "glow-up-notification-log-v3";

const sampleState = {
  planner: {
    Monday: [
      block("Glutes + hamstrings + StairMaster", "07:00", "08:30", "gym", "Planet Fitness lower-body day with a StairMaster finish and posture warm-up."),
      block("Shower + morning skincare + teeth", "08:30", "09:00", "care", "Sensitive-teeth brushing, gentle skincare, deodorant, simple hair refresh."),
      block("Work shift", "13:00", "21:00", "work", "Replace with your real Starbucks shift."),
      block("Night reset", "21:20", "21:45", "care", "Double cleanse if needed, floss, brush, satin hair protection.")
    ],
    Tuesday: [
      block("Pilates core + elliptical", "08:00", "09:05", "gym", "Pilates-inspired core work with an elliptical cooldown."),
      block("Wash day + scalp care", "09:05", "09:45", "care", "Gentle shampoo, conditioner, scalp serum, detangle."),
      block("Outfit planning + lunch prep", "18:00", "18:45", "meal", "Set tomorrow outfit and prep a quick protein-forward meal.")
    ],
    Wednesday: [
      block("Recovery cardio + posture", "08:00", "08:45", "gym", "Easy cardio day with shoulder opening and posture drills."),
      block("Work shift", "12:00", "18:00", "work", "Replace with your real shift."),
      block("Quick shower + hair ends care", "18:30", "19:00", "care", "Quick rinse if sweaty, leave-in only on mid-lengths and ends.")
    ],
    Thursday: [
      block("Glutes + quads + treadmill", "07:30", "09:00", "gym", "Glute and quad machine day with a treadmill finish."),
      block("Morning glow-up", "09:05", "09:25", "care", "AM skincare, teeth, hair smoothing, simple makeup if wanted."),
      block("Work shift", "14:00", "21:00", "work", "Replace with your real Starbucks shift.")
    ],
    Friday: [
      block("Upper body + posture", "08:00", "09:10", "gym", "Back, shoulders, and posture-focused work."),
      block("Grocery shopping", "10:00", "11:00", "errand", "Aldi run for yogurt, eggs, chicken, fish, frozen blueberries, easy carbs."),
      block("Meal prep + kitchen reset", "11:10", "12:30", "meal", "Cook proteins first, then carbs, then snack boxes.")
    ],
    Saturday: [
      block("Long trainee session", "09:00", "10:35", "gym", "Dance warm-up, cardio, glutes, abs, and idol-style posture work."),
      block("Deep shower + hair care", "10:35", "11:20", "care", "Scalp focus, body care, detangle, style planning."),
      block("Work shift", "13:00", "19:00", "work", "Replace with your real shift.")
    ],
    Sunday: [
      block("Mobility + reset", "09:30", "10:05", "gym", "Light stretch, hips, calves, shoulders, and recovery breathing."),
      block("Weekly planning + outfit swap", "10:15", "10:50", "errand", "Review next week, pre-pick work and off-day outfits."),
      block("Hair oil on ends + night routine", "20:00", "20:20", "care", "Very light oil only on ends; keep scalp clean.")
    ]
  },
  routines: [
    routine("Morning glow-up", "Built from your skincare, teeth, and hair chats.", [
      "Brush with sensitive-teeth toothpaste for 2 minutes",
      "Floss or floss picks",
      "Gentle face cleanse + skincare",
      "Hair refresh: brush, scalp check, smooth flyaways",
      "Pick outfit that matches work / gym / errands"
    ]),
    routine("After gym / after work reset", "Keep sweat, buildup, and irritation under control.", [
      "Shower or quick rinse",
      "Body lotion / KP care on arms and legs",
      "Clean clothes and deodorant",
      "Protein meal or snack",
      "Leave-in or ends serum if hair feels dry"
    ]),
    routine("Night routine", "Protect skin, teeth, and hair before bed.", [
      "Brush teeth",
      "Floss",
      "Night skincare",
      "Satin or silk hair protection / loose braid",
      "Set tomorrow gym clothes or work outfit"
    ]),
    routine("Wash day + scalp recovery", "Pulled from your scalp, serum, and hair-thinning conversations.", [
      "Use a gentle shampoo",
      "Condition mid-lengths and ends",
      "Apply scalp serum or essence to clean scalp",
      "Use leave-in only on dry ends",
      "Avoid heavy oils directly on scalp"
    ])
  ],
  household: [
    {
      title: "Weekly grocery rhythm",
      subtitle: "Budget-friendly, protein-forward, stomach-aware.",
      lines: [
        "Shop Friday or Sunday so work days stay easier.",
        "Core staples: Greek yogurt, eggs, chicken, fish, frozen blueberries, easy carbs.",
        "Avoid building meals around triggers like tomatoes or heavy greasy foods.",
        "Restock shower, hair, and oral-care basics once weekly."
      ]
    },
    {
      title: "Cooking rhythm",
      subtitle: "Lower decision fatigue for work and gym days.",
      lines: [
        "Do 2 prep sessions each week.",
        "Cook protein first, then carbs, then snack boxes.",
        "Keep one no-thinking backup meal ready.",
        "Set out tomorrow’s breakfast or snack after dinner."
      ]
    }
  ],
  beautyGuides: [
    {
      title: "Outfit Style Swap",
      subtitle: "Turn style into a routine, not a last-minute panic.",
      lines: [
        "Use three lanes: work, gym, and pretty errand outfits.",
        "Keep one default formula ready: fitted top + easy bottom + clean shoes + simple jewelry.",
        "Pre-pick tomorrow’s outfit during your night routine.",
        "Use soft, flattering, K-drama-inspired outfits for off days and practical polished looks for work."
      ]
    },
    {
      title: "Milk tea brown hair maintenance",
      subtitle: "Keep the color soft, glossy, and not brassy.",
      lines: [
        "Prioritize gentle cleansing over harsh daily stripping.",
        "Use cool to lukewarm water when possible.",
        "Protect hair from sun and friction.",
        "Focus leave-ins and oils on mid-lengths and ends, not the scalp."
      ]
    },
    {
      title: "DIY Renpure-inspired scalp routine",
      subtitle: "Built around your scalp sensitivity, flakes, and thinning concerns.",
      lines: [
        "Keep the scalp routine lightweight and soothing.",
        "Apply serum to clean scalp, not on dirty buildup days.",
        "Avoid picking at flakes or scabs.",
        "Pair scalp care with a gentle shampoo and a separate leave-in for dry ends."
      ]
    },
    {
      title: "Sensitive teeth routine",
      subtitle: "Use the teeth chat as a pain-aware smile plan.",
      lines: [
        "Use a sensitive-teeth toothpaste consistently, not randomly.",
        "Brush gently; do not scrub hard.",
        "Floss daily, then rinse with water if your mouth feels irritated.",
        "Keep morning and night brushing blocks visible in your schedule."
      ]
    },
    {
      title: "K-pop skincare reset",
      subtitle: "Aim for calm, consistent skin instead of overdoing products.",
      lines: [
        "Use a gentle cleanse + moisturize base routine.",
        "Keep your after-work or after-gym cleanse easy so you actually do it.",
        "Treat scalp and facial skin as separate routines.",
        "Use recovery days if your skin feels hot, itchy, or overworked."
      ]
    },
    {
      title: "Planet Fitness trainee split",
      subtitle: "Matches the structure you kept returning to.",
      lines: [
        "Monday: glutes + hamstrings + StairMaster.",
        "Tuesday: Pilates core + elliptical.",
        "Wednesday: recovery cardio + posture.",
        "Thursday: glutes + quads + treadmill.",
        "Friday: upper body + posture.",
        "Saturday: longer trainee session with dance warm-up, cardio, glutes, and abs.",
        "Sunday: mobility, reset, and light recovery work."
      ]
    }
  ],
  habitHistory: {},
  meta: {
    streak: 0,
    lastCheckDate: "",
    weeklyScore: 0
  }
};

const defaultReminderSettings = {
  eventReminders: true,
  leadMinutes: 10,
  morningTime: "08:00",
  nightTime: "21:15"
};

let state = loadState();
let reminderSettings = loadReminderSettings();
let notificationLog = loadNotificationLog();
let activeEdit = { day: null, id: null };
let deferredPrompt = null;
let reminderInterval = null;
let reminderTimeout = null;

const weeklyPlanner = document.getElementById("weeklyPlanner");
const routineGroups = document.getElementById("routineGroups");
const householdBlocks = document.getElementById("householdBlocks");
const beautyGuides = document.getElementById("beautyGuides");
const todayDate = document.getElementById("todayDate");
const focusText = document.getElementById("focusText");
const nextRoutine = document.getElementById("nextRoutine");
const completionText = document.getElementById("completionText");
const todayTimeline = document.getElementById("todayTimeline");
const streakCount = document.getElementById("streakCount");
const habitScore = document.getElementById("habitScore");
const reminderStatus = document.getElementById("reminderStatus");
const quickAddForm = document.getElementById("quickAddForm");
const editDialog = document.getElementById("editDialog");
const editForm = document.getElementById("editForm");
const deleteBlockButton = document.getElementById("deleteBlockButton");
const installButton = document.getElementById("installButton");
const jumpToTodayButton = document.getElementById("jumpToTodayButton");
const enableNotificationsButton = document.getElementById("enableNotificationsButton");
const eventReminderToggle = document.getElementById("eventReminderToggle");
const reminderLeadMinutes = document.getElementById("reminderLeadMinutes");
const morningReminderTime = document.getElementById("morningReminderTime");
const nightReminderTime = document.getElementById("nightReminderTime");
const saveReminderSettingsButton = document.getElementById("saveReminderSettingsButton");
const buildTraineeModeButton = document.getElementById("buildTraineeModeButton");
const traineePreset = document.getElementById("traineePreset");
const navButtons = document.querySelectorAll(".nav-btn");
const daySelect = quickAddForm.elements.day;

hydrateControls();
attachEvents();
registerServiceWorker();
render();
startReminderEngine();

function block(title, start, end, category, notes) {
  return { id: crypto.randomUUID(), title, start, end, category, notes };
}

function routine(title, focus, items) {
  return { title, focus, items: items.map((text) => ({ id: crypto.randomUUID(), text, done: false })) };
}

function hydrateControls() {
  days.forEach((day) => {
    const option = document.createElement("option");
    option.value = day;
    option.textContent = day;
    daySelect.appendChild(option);
  });
  daySelect.value = todayName();
  eventReminderToggle.checked = reminderSettings.eventReminders;
  reminderLeadMinutes.value = String(reminderSettings.leadMinutes);
  morningReminderTime.value = reminderSettings.morningTime;
  nightReminderTime.value = reminderSettings.nightTime;
  reminderStatus.textContent = reminderSettings.eventReminders ? "On" : "Off";
}

function attachEvents() {
  document.getElementById("resetButton").addEventListener("click", resetPlan);
  document.getElementById("exportButton").addEventListener("click", exportPlan);
  jumpToTodayButton.addEventListener("click", () => switchTab("today"));
  buildTraineeModeButton.addEventListener("click", buildTraineeMode);

  quickAddForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(quickAddForm);
    const day = formData.get("day");
    const newBlock = block(formData.get("title"), formData.get("start"), formData.get("end"), formData.get("category"), "");
    state.planner[day].push(newBlock);
    state.planner[day].sort(sortByStart);
    persistState();
    quickAddForm.reset();
    daySelect.value = day;
    render();
  });

  editForm.addEventListener("submit", () => {
    const list = state.planner[activeEdit.day];
    const current = list.find((item) => item.id === activeEdit.id);
    if (!current) return;
    current.title = editForm.elements.title.value;
    current.start = editForm.elements.start.value;
    current.end = editForm.elements.end.value;
    current.notes = editForm.elements.notes.value;
    list.sort(sortByStart);
    persistState();
    render();
  });

  deleteBlockButton.addEventListener("click", () => {
    state.planner[activeEdit.day] = state.planner[activeEdit.day].filter((item) => item.id !== activeEdit.id);
    persistState();
    editDialog.close();
    render();
  });

  navButtons.forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.tab)));

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.classList.remove("hidden");
  });

  installButton.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installButton.classList.add("hidden");
  });

  enableNotificationsButton.addEventListener("click", requestNotificationPermission);
  saveReminderSettingsButton.addEventListener("click", saveReminderSettings);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) checkReminders(true);
  });
  window.addEventListener("focus", () => checkReminders(true));
}

function render() {
  updateHabitTracking();
  renderHeader();
  renderTodayTimeline();
  renderPlanner();
  renderRoutines();
  renderHousehold();
  renderBeautyGuides();
}

function renderHeader() {
  const now = new Date();
  todayDate.textContent = now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const todaysBlocks = getTodayBlocks();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const upcoming = todaysBlocks.find((item) => timeToMinutes(item.end) >= currentMinutes);
  nextRoutine.textContent = upcoming ? `${upcoming.title} • ${formatTime(upcoming.start)}–${formatTime(upcoming.end)}` : "No more blocks today";
  const checklistItems = state.routines.flatMap((group) => group.items);
  const doneCount = checklistItems.filter((item) => item.done).length;
  const percent = checklistItems.length ? Math.round((doneCount / checklistItems.length) * 100) : 0;
  completionText.textContent = `${percent}%`;
  document.querySelector(".ring").style.setProperty("--progress", `${percent}%`);
  focusText.textContent = percent < 35 ? "Build momentum" : percent < 75 ? "Keep your trainee rhythm going" : "Strong finish today";
  streakCount.textContent = state.meta.streak;
  habitScore.textContent = `${state.meta.weeklyScore}%`;
  reminderStatus.textContent = reminderSettings.eventReminders ? "On" : "Off";
}

function renderTodayTimeline() {
  todayTimeline.innerHTML = "";
  const todaysBlocks = getTodayBlocks();
  if (!todaysBlocks.length) {
    todayTimeline.innerHTML = `<div class="timeline-card"><strong>No blocks today</strong><p class="muted">Add a shift, gym session, or routine in the Plan tab.</p></div>`;
    return;
  }
  const nowMinutes = new Date().getHours() * 60 + new Date().getMinutes();
  todaysBlocks.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-card";
    const stateText = nowMinutes > timeToMinutes(item.end) ? "Done" : nowMinutes >= timeToMinutes(item.start) ? "Now" : "Up next";
    article.innerHTML = `
      <div class="timeline-meta">
        <span class="timeline-tag ${item.category}">${capitalize(item.category)}</span>
        <span class="pill">${stateText}</span>
      </div>
      <strong>${item.title}</strong>
      <div>${formatTime(item.start)} – ${formatTime(item.end)}</div>
      ${item.notes ? `<p class="muted">${item.notes}</p>` : ""}
    `;
    todayTimeline.appendChild(article);
  });
}

function renderPlanner() {
  weeklyPlanner.innerHTML = "";
  days.forEach((day) => {
    const column = document.createElement("article");
    column.className = "day-column";
    column.innerHTML = `<h3>${day}</h3>`;
    const list = document.createElement("div");
    list.className = "block-list";
    state.planner[day].sort(sortByStart).forEach((entry) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = `time-block ${entry.category}`;
      card.innerHTML = `
        <strong>${entry.title}</strong>
        <div>${formatTime(entry.start)} – ${formatTime(entry.end)}</div>
        ${entry.notes ? `<div class="note-text">${entry.notes}</div>` : ""}
      `;
      card.addEventListener("click", () => openEdit(day, entry.id));
      list.appendChild(card);
    });
    column.appendChild(list);
    weeklyPlanner.appendChild(column);
  });
}

function renderRoutines() {
  routineGroups.innerHTML = "";
  state.routines.forEach((group, groupIndex) => {
    const card = document.createElement("article");
    card.className = "routine-card";
    card.innerHTML = `<p class="eyebrow">Routine</p><h3>${group.title}</h3><p class="muted">${group.focus}</p>`;
    const checklist = document.createElement("div");
    checklist.className = "checklist";

    group.items.forEach((item, itemIndex) => {
      const row = document.createElement("label");
      row.className = "check-item";
      row.innerHTML = `<input type="checkbox" ${item.done ? "checked" : ""}><span>${item.text}</span>`;
      row.querySelector("input").addEventListener("change", (event) => {
        state.routines[groupIndex].items[itemIndex].done = event.target.checked;
        persistState();
        updateHabitTracking();
        renderHeader();
      });
      checklist.appendChild(row);
    });

    card.appendChild(checklist);
    routineGroups.appendChild(card);
  });
}

function renderHousehold() {
  householdBlocks.innerHTML = "";
  state.household.forEach((item) => {
    const card = document.createElement("article");
    card.className = "household-card";
    card.innerHTML = `<p class="eyebrow">Life admin</p><h3>${item.title}</h3><p class="muted">${item.subtitle}</p>`;
    const list = document.createElement("div");
    list.className = "checklist";
    item.lines.forEach((line) => {
      const row = document.createElement("div");
      row.className = "check-item";
      row.innerHTML = `<span>${line}</span>`;
      list.appendChild(row);
    });
    card.appendChild(list);
    householdBlocks.appendChild(card);
  });
}

function renderBeautyGuides() {
  beautyGuides.innerHTML = "";
  state.beautyGuides.forEach((item) => {
    const card = document.createElement("article");
    card.className = "household-card guide-card";
    card.innerHTML = `<p class="eyebrow">Glow-up guide</p><h3>${item.title}</h3><p class="muted">${item.subtitle}</p>`;
    const list = document.createElement("div");
    list.className = "checklist";
    item.lines.forEach((line) => {
      const row = document.createElement("div");
      row.className = "check-item";
      row.innerHTML = `<span>${line}</span>`;
      list.appendChild(row);
    });
    card.appendChild(list);
    beautyGuides.appendChild(card);
  });
}

function openEdit(day, id) {
  const current = state.planner[day].find((item) => item.id === id);
  if (!current) return;
  activeEdit = { day, id };
  editForm.elements.title.value = current.title;
  editForm.elements.start.value = current.start;
  editForm.elements.end.value = current.end;
  editForm.elements.notes.value = current.notes || "";
  editDialog.showModal();
}

function resetPlan() {
  if (!confirm("Reset to the updated sample plan? Your saved edits will be replaced.")) return;
  state = structuredClone(sampleState);
  reminderSettings = { ...defaultReminderSettings };
  notificationLog = {};
  persistState();
  persistReminderSettings();
  persistNotificationLog();
  eventReminderToggle.checked = reminderSettings.eventReminders;
  reminderLeadMinutes.value = String(reminderSettings.leadMinutes);
  morningReminderTime.value = reminderSettings.morningTime;
  nightReminderTime.value = reminderSettings.nightTime;
  render();
  startReminderEngine();
}

function exportPlan() {
  const data = JSON.stringify({ state, reminderSettings }, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "glow-up-time-manager-backup.json";
  link.click();
  URL.revokeObjectURL(url);
}

function requestNotificationPermission() {
  if (!("Notification" in window)) {
    alert("Notifications are not supported in this browser.");
    return;
  }
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      reminderStatus.textContent = "On";
      showNotification("Glow Up Planner", "Notifications are enabled.");
      checkReminders(true);
    }
  });
}

function saveReminderSettings() {
  reminderSettings = {
    eventReminders: eventReminderToggle.checked,
    leadMinutes: Number(reminderLeadMinutes.value),
    morningTime: morningReminderTime.value,
    nightTime: nightReminderTime.value
  };
  persistReminderSettings();
  renderHeader();
  startReminderEngine();
  alert("Reminder settings saved.");
}

function startReminderEngine() {
  if (reminderInterval) clearInterval(reminderInterval);
  if (reminderTimeout) clearTimeout(reminderTimeout);
  checkReminders(true);
  reminderInterval = setInterval(() => checkReminders(false), 15000);
  const msUntilNextMinute = 60000 - (Date.now() % 60000) + 200;
  reminderTimeout = setTimeout(() => {
    checkReminders(true);
    startReminderEngine();
  }, msUntilNextMinute);
}

function checkReminders(force) {
  const now = new Date();
  const todayKey = now.toISOString().slice(0, 10);
  pruneNotificationLog(todayKey);

  if (reminderSettings.eventReminders) {
    const lead = reminderSettings.leadMinutes;
    getTodayBlocks().forEach((item) => {
      const currentMins = now.getHours() * 60 + now.getMinutes();
      const startMins = timeToMinutes(item.start);
      const reminderWindowStart = startMins - lead;
      const shouldFire = currentMins >= reminderWindowStart && currentMins <= reminderWindowStart + 1;
      const fallbackCatchup = force && currentMins > reminderWindowStart && currentMins < startMins;
      if (shouldFire || fallbackCatchup) {
        const key = `${todayKey}-event-${item.id}-${lead}`;
        if (!notificationLog[key]) {
          showNotification(item.title, `${formatTime(item.start)} starts soon`);
          notificationLog[key] = Date.now();
          persistNotificationLog();
        }
      }
    });
  }

  [
    { label: "Morning routine", time: reminderSettings.morningTime },
    { label: "Night routine", time: reminderSettings.nightTime }
  ].forEach((entry) => {
    const [hour, minute] = entry.time.split(":").map(Number);
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const targetMins = hour * 60 + minute;
    const shouldFire = currentMins >= targetMins && currentMins <= targetMins + 1;
    const fallbackCatchup = force && currentMins > targetMins && currentMins < targetMins + 10;
    if (shouldFire || fallbackCatchup) {
      const key = `${todayKey}-routine-${entry.label}-${entry.time}`;
      if (!notificationLog[key]) {
        showNotification(entry.label, "Time for your glow-up routine.");
        notificationLog[key] = Date.now();
        persistNotificationLog();
      }
    }
  });
}

function showNotification(title, body) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  if (navigator.serviceWorker?.ready) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(title, { body, icon: "icon-192.png", badge: "icon-192.png", tag: title, renotify: false });
    }).catch(() => new Notification(title, { body }));
  } else {
    new Notification(title, { body });
  }
}

function buildTraineeMode() {
  const preset = traineePreset.value;
  days.forEach((day) => {
    const entries = state.planner[day];
    const workBlock = entries.find((item) => item.category === "work");
    removeAutoBlocks(entries);
    const additions = buildAutoBlocksForDay(day, workBlock, preset);
    additions.forEach((item) => entries.push(item));
    entries.sort(sortByStart);
  });
  persistState();
  render();
  alert("Trainee mode rebuilt around your current work shifts.");
}

function buildAutoBlocksForDay(day, workBlock, preset) {
  const intensity = preset === "intense" ? 1 : preset === "recovery" ? -1 : 0;
  const blocks = [];
  const split = getSplitForDay(day, intensity);

  if (workBlock) {
    const workStart = timeToMinutes(workBlock.start);
    const workEnd = timeToMinutes(workBlock.end);
    const gymDuration = split.duration;
    const careDuration = intensity === 1 ? 30 : 20;
    const mealDuration = 35;

    if (workStart >= 12 * 60) {
      const gymEnd = workStart - 150;
      const gymStart = Math.max(6 * 60, gymEnd - gymDuration);
      blocks.push(autoBlock(split.title, minutesToTime(gymStart), minutesToTime(gymEnd), "gym", split.notes));
      blocks.push(autoBlock("Auto shower + glow-up", minutesToTime(gymEnd + 5), minutesToTime(gymEnd + 5 + careDuration), "care", "Quick shower, skincare, teeth, and hair refresh."));
      blocks.push(autoBlock("Auto protein meal", minutesToTime(gymEnd + 10 + careDuration), minutesToTime(gymEnd + 10 + careDuration + mealDuration), "meal", "Easy protein-forward meal before work."));
      blocks.push(autoBlock("Auto night wind-down", minutesToTime(workEnd + 20), minutesToTime(workEnd + 45), "care", "Brush, floss, skincare, outfit prep, satin hair protection."));
    } else {
      blocks.push(autoBlock("Auto morning glow-up", "06:30", "06:55", "care", "Teeth, skincare, hair refresh, get out the door faster."));
      blocks.push(autoBlock(split.recoveryTitle || split.title, minutesToTime(workEnd + 20), minutesToTime(workEnd + 20 + gymDuration), "gym", split.recoveryNotes || split.notes));
      blocks.push(autoBlock("Auto shower + meal", minutesToTime(workEnd + 25 + gymDuration), minutesToTime(workEnd + 25 + gymDuration + 45), "care", "Shower first, then simple meal prep or dinner."));
    }
  } else {
    if (day === "Friday") {
      blocks.push(autoBlock("Auto groceries", "10:00", "11:00", "errand", "Weekly staples, oral care, hair care, shower basics."));
      blocks.push(autoBlock("Auto meal prep", "11:10", "12:30", "meal", "Protein, carbs, snack boxes."));
    }
    if (day === "Sunday") {
      blocks.push(autoBlock("Auto weekly reset", "10:15", "10:50", "errand", "Plan outfits, work bag, gym bag, beauty refill check."));
    }
    const gymStart = day === "Sunday" ? "09:30" : "09:00";
    blocks.push(autoBlock(split.title, gymStart, minutesToTime(timeToMinutes(gymStart) + split.duration), "gym", split.notes));
    blocks.push(autoBlock("Auto shower + care", minutesToTime(timeToMinutes(gymStart) + split.duration + 5), minutesToTime(timeToMinutes(gymStart) + split.duration + 35), "care", "Deep shower, skincare, hair care, teeth."));
  }
  return blocks;
}

function getSplitForDay(day, intensity) {
  const add = intensity === 1 ? 10 : intensity === -1 ? -15 : 0;
  const map = {
    Monday: {
      title: "Auto glutes + hamstrings + StairMaster",
      duration: 85,
      notes: "Lower-body focus with a StairMaster finish and posture warm-up.",
      recoveryTitle: "Auto glutes + hamstrings reset",
      recoveryNotes: "Keep Monday lower-body focused but slightly shorter after an early shift."
    },
    Tuesday: {
      title: "Auto Pilates core + elliptical",
      duration: 65,
      notes: "Pilates-inspired core session plus elliptical cardio.",
      recoveryTitle: "Auto Pilates core + easy cardio",
      recoveryNotes: "Shorter core and elliptical recovery-friendly version."
    },
    Wednesday: {
      title: "Auto recovery cardio + posture",
      duration: 45,
      notes: "Easy cardio, shoulder opening, and posture drills.",
      recoveryTitle: "Auto recovery walk + posture",
      recoveryNotes: "Keep Wednesday light and restorative."
    },
    Thursday: {
      title: "Auto glutes + quads + treadmill",
      duration: 80,
      notes: "Glute and quad machine day with a treadmill finish.",
      recoveryTitle: "Auto glutes + quads reset",
      recoveryNotes: "Shorter glute and quad day after an early shift."
    },
    Friday: {
      title: "Auto upper body + posture",
      duration: 70,
      notes: "Back, shoulders, arms, and posture drills.",
      recoveryTitle: "Auto upper body reset",
      recoveryNotes: "Shorter upper-body and posture session."
    },
    Saturday: {
      title: "Auto long trainee session",
      duration: 95,
      notes: "Dance warm-up, cardio, glutes, abs, and idol-style posture work.",
      recoveryTitle: "Auto trainee mini session",
      recoveryNotes: "Shorter trainee session for a busier Saturday."
    },
    Sunday: {
      title: "Auto mobility + reset",
      duration: 35,
      notes: "Light stretching, hips, calves, shoulders, and recovery breathing.",
      recoveryTitle: "Auto mobility reset",
      recoveryNotes: "Keep Sunday easy and restorative."
    }
  };
  const split = { ...map[day] };
  split.duration = Math.max(30, split.duration + add);
  return split;
}

function autoBlock(title, start, end, category, notes) {
  return { id: crypto.randomUUID(), title, start, end, category, notes, auto: true };
}

function removeAutoBlocks(entries) {
  for (let i = entries.length - 1; i >= 0; i -= 1) {
    if (entries[i].auto) entries.splice(i, 1);
  }
}

function updateHabitTracking() {
  const today = new Date().toISOString().slice(0, 10);
  const checklistItems = state.routines.flatMap((group) => group.items);
  const doneCount = checklistItems.filter((item) => item.done).length;
  const total = checklistItems.length || 1;
  const todayScore = Math.round((doneCount / total) * 100);
  state.habitHistory[today] = todayScore;

  const last7 = [];
  for (let offset = 0; offset < 7; offset += 1) {
    const date = new Date(Date.now() - offset * 86400000).toISOString().slice(0, 10);
    last7.push(state.habitHistory[date] || 0);
  }
  state.meta.weeklyScore = Math.round(last7.reduce((sum, value) => sum + value, 0) / last7.length);

  if (todayScore > 0 && state.meta.lastCheckDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.meta.streak = state.meta.lastCheckDate === yesterday ? state.meta.streak + 1 : 1;
    state.meta.lastCheckDate = today;
  }
  persistState();
}

function switchTab(name) {
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach((button) => button.classList.remove("active"));
  document.getElementById(`tab-${name}`).classList.add("active");
  document.querySelector(`.nav-btn[data-tab="${name}"]`).classList.add("active");
}

function getTodayBlocks() {
  return (state.planner[todayName()] || []).slice().sort(sortByStart);
}

function todayName() {
  const dayIndex = new Date().getDay();
  return days[dayIndex === 0 ? 6 : dayIndex - 1];
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(sampleState);
  try {
    const parsed = JSON.parse(saved);
    parsed.beautyGuides ||= structuredClone(sampleState.beautyGuides);
    parsed.habitHistory ||= {};
    parsed.meta ||= { streak: 0, lastCheckDate: "", weeklyScore: 0 };
    return parsed;
  } catch {
    return structuredClone(sampleState);
  }
}

function loadReminderSettings() {
  const saved = localStorage.getItem(reminderStorageKey);
  if (!saved) return { ...defaultReminderSettings };
  try { return { ...defaultReminderSettings, ...JSON.parse(saved) }; } catch { return { ...defaultReminderSettings }; }
}

function loadNotificationLog() {
  const saved = localStorage.getItem(notificationLogKey);
  if (!saved) return {};
  try { return JSON.parse(saved); } catch { return {}; }
}

function persistState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function persistReminderSettings() {
  localStorage.setItem(reminderStorageKey, JSON.stringify(reminderSettings));
}

function persistNotificationLog() {
  localStorage.setItem(notificationLogKey, JSON.stringify(notificationLog));
}

function pruneNotificationLog(todayKey) {
  Object.keys(notificationLog).forEach((key) => {
    if (!key.startsWith(todayKey)) delete notificationLog[key];
  });
}

function sortByStart(a, b) { return a.start.localeCompare(b.start); }
function timeToMinutes(time) { const [h, m] = time.split(":").map(Number); return h * 60 + m; }
function minutesToTime(total) {
  const safe = Math.max(0, Math.min(total, 23 * 60 + 59));
  const h = String(Math.floor(safe / 60)).padStart(2, "0");
  const m = String(safe % 60).padStart(2, "0");
  return `${h}:${m}`;
}
function formatTime(time) {
  const [hourText, minute] = time.split(":");
  let hour = Number(hourText);
  const suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${suffix}`;
}
function capitalize(value) { return value.charAt(0).toUpperCase() + value.slice(1); }

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
}
const hairKey = "lastHairWash";

document.getElementById("logWashDay")?.addEventListener("click", () => {
  const today = new Date().toISOString();
  localStorage.setItem(hairKey, today);
  updateHairRoutine();
});

function getDaysSinceWash() {
  const saved = localStorage.getItem(hairKey);
  if (!saved) return null;

  const last = new Date(saved);
  const now = new Date();

  const diff = Math.floor((now - last) / (1000 * 60 * 60 * 24));
  return diff;
}

function updateHairRoutine() {
  const days = getDaysSinceWash();
  const status = document.getElementById("hairStatusText");

  if (days === null) {
    status.textContent = "Log your last wash day";
    return;
  }

  if (days === 0) {
    status.textContent = "Wash day: full routine + scalp care";
  } else if (days === 1) {
    status.textContent = "Light refresh only (no heavy products)";
  } else if (days === 2) {
    status.textContent = "Style + gentle refresh (avoid dry shampoo if sensitive)";
  } else {
    status.textContent = "Wash recommended today";
  }
}