# Documentation Index - Recipe 3D App

**Last Updated:** 2025-12-04

---

## 📚 Documentation Overview

This project uses a comprehensive documentation system to maintain clarity, track decisions, and enable smooth session transitions.

---

## 🗂️ Core Documentation Files

### 1. PROJECT_OVERVIEW.md
**Purpose:** Immutable project vision and goals
**Rules:** **NEVER MODIFY** - This is the north star
**Contains:**
- Core vision and mission
- Feature list
- Design principles
- Tech stack overview
- Inspiration sources

**When to read:** Start of project, when questioning direction

---

### 2. CURRENT_STATE.md
**Purpose:** Session continuity and current status
**Rules:** **REWRITE each session** (<100 lines)
**Contains:**
- What's currently working
- Active work in progress
- Next 3 tasks (prioritized)
- Recent changes (current session)
- Known issues
- Performance metrics

**When to read:** Start of EVERY session
**When to update:** End of EVERY session

---

### 3. TECHNICAL_DECISIONS.md
**Purpose:** Decision log and rationale
**Rules:** **APPEND ONLY** - Never delete, only add
**Contains:**
- Major technical decisions
- Rationale for each choice
- Alternatives considered
- Trade-offs accepted
- Cross-references to related docs

**When to read:** When questioning why something was done a certain way
**When to update:** After making significant architectural decisions

---

### 4. DIRECTORY_GUIDE.md
**Purpose:** Quick reference for file organization
**Rules:** Update when structure changes
**Contains:**
- Where to place different file types
- Project structure explanation
- Decision tree for file placement
- Examples and anti-patterns

**When to read:** When creating new files or organizing code
**When to update:** After major restructuring

---

## 📋 Feature Documentation

### specs/features/

Feature-specific documentation for major components or systems.

#### CARTOON_STYLE_GUIDE.md
**Purpose:** Visual style guide for cartoon transformation
**Contains:**
- Style philosophy and principles
- Material specifications for each object type
- Outline specifications
- Lighting setup
- Color palette
- Shading model (3-tone cel)
- Do's and don'ts
- Quality checklist
- Troubleshooting guide

**When to read:** During style implementation, when adding new objects
**When to update:** After style refinements or discoveries

---

## 🔧 Implementation Specifications

### specs/STYLE_TRANSFORMATION.md
**Purpose:** Technical implementation plan for style change
**Contains:**
- Vision and target aesthetic
- Phase-by-phase implementation plan
- Material mapping (before → after)
- Lighting adjustments
- File changes required
- Performance considerations
- Before/after comparison
- Testing checklist
- Success metrics

**When to read:** Before implementing the transformation
**When to update:** As implementation progresses and discoveries are made

---

## 📊 Document Hierarchy

```
Priority 1: READ FIRST (Every Session)
  └── CURRENT_STATE.md

Priority 2: READ WHEN NEEDED
  ├── PROJECT_OVERVIEW.md (vision alignment)
  ├── TECHNICAL_DECISIONS.md (understanding why)
  └── DIRECTORY_GUIDE.md (file placement)

Priority 3: READ FOR SPECIFIC TASKS
  ├── STYLE_TRANSFORMATION.md (implementation guide)
  ├── CARTOON_STYLE_GUIDE.md (visual reference)
  └── [Future feature specs]

Priority 4: ARCHIVE
  └── specs/archive/ (historical decisions)
```

---

## 🔄 Documentation Workflow

### Start of Session:
1. Read `CURRENT_STATE.md` (5 min)
2. Check "Next 3 Tasks"
3. Skim related feature specs if needed
4. Begin work

### During Session:
1. Take notes on decisions made
2. Reference style guides when styling
3. Check technical decisions if unsure

### End of Session:
1. **Update `CURRENT_STATE.md`:**
   - Mark completed tasks
   - List new "Next 3 Tasks"
   - Document recent changes
   - Note any blockers
2. **Append to `TECHNICAL_DECISIONS.md`** (if major decision made)
3. **Update feature specs** (if scope changed)

---

## 📝 Documentation Standards

### File Naming:
- `UPPERCASE_SNAKE_CASE.md` for core docs
- `lowercase-kebab-case.md` for feature specs
- Always include `.md` extension

### Formatting:
- Use markdown headers (# ## ###)
- Include tables for comparisons
- Use code blocks for examples
- Add **bold** for emphasis
- Use `inline code` for file names/values

### Length Guidelines:
- `CURRENT_STATE.md`: <100 lines
- `TECHNICAL_DECISIONS.md`: Unlimited (append only)
- Feature specs: 100-300 lines (split if larger)
- Style guides: 200-500 lines

### Update Frequency:
- `CURRENT_STATE.md`: Every session
- `TECHNICAL_DECISIONS.md`: After major decisions
- Feature specs: As features evolve
- Style guides: When style changes

---

## 🗃️ Archive System

### When to Archive:

Archive `TECHNICAL_DECISIONS.md` when it exceeds **300 lines**:

```bash
# Move to archive with quarter stamp
mv specs/TECHNICAL_DECISIONS.md specs/archive/decisions-2025-Q1.md

# Create fresh file
echo "# Technical Decisions Log\n\n[Archived decisions in specs/archive/]" > specs/TECHNICAL_DECISIONS.md
```

### Archive Naming:
- `decisions-YYYY-Q#.md` (quarterly archives)
- `features-YYYY-MM.md` (monthly feature archives)

---

## 🎯 Quick Reference

### "Where do I...?"

| Task | Document |
|------|----------|
| Understand project goals | PROJECT_OVERVIEW.md |
| See current status | CURRENT_STATE.md |
| Know what to work on next | CURRENT_STATE.md → "Next 3 Tasks" |
| Understand why we did X | TECHNICAL_DECISIONS.md |
| Know where to put a file | DIRECTORY_GUIDE.md |
| Implement cartoon style | STYLE_TRANSFORMATION.md |
| Style a new object | CARTOON_STYLE_GUIDE.md |
| Find old decisions | specs/archive/ |

---

## 🔍 Document Relationships

```
PROJECT_OVERVIEW.md (vision)
    ↓ informs
TECHNICAL_DECISIONS.md (how we achieve vision)
    ↓ results in
CURRENT_STATE.md (where we are now)
    ↓ guides
[Feature Specs] (what to build)
    ↓ details
[Style Guides] (how to build it)
```

---

## ✅ Documentation Quality Checklist

Good documentation should be:

- [ ] **Clear** - Easy to understand
- [ ] **Concise** - No unnecessary words
- [ ] **Current** - Reflects reality
- [ ] **Comprehensive** - Covers all major points
- [ ] **Consistent** - Follows standards
- [ ] **Cross-referenced** - Links to related docs
- [ ] **Actionable** - Can be used to make decisions
- [ ] **Maintained** - Updated regularly

---

## 📈 Documentation Metrics

Track documentation health:

- **Current State freshness:** Last updated date (should be today)
- **Decision log coverage:** New decisions documented?
- **Feature spec completeness:** All features have specs?
- **Style guide accuracy:** Matches implementation?
- **Archive hygiene:** Old content moved to archive?

---

## 🚀 Future Documentation

As project grows, consider adding:

- **API_REFERENCE.md** - When APIs stabilize
- **COMPONENT_LIBRARY.md** - Catalog of 3D components
- **PERFORMANCE_GUIDE.md** - Optimization techniques
- **TESTING_STRATEGY.md** - Test approach and coverage
- **DEPLOYMENT_GUIDE.md** - How to deploy
- **TROUBLESHOOTING.md** - Common issues and fixes

---

## 💡 Documentation Best Practices

### Write for your future self:
- Assume you'll forget context
- Explain "why" not just "what"
- Include examples
- Link to resources

### Keep it scannable:
- Use headers liberally
- Add tables for comparisons
- Use bullet points
- Bold key terms

### Make it actionable:
- Include checklists
- Provide code examples
- Link to related files
- Suggest next steps

### Maintain quality:
- Fix errors when you see them
- Update outdated info immediately
- Archive old content regularly
- Review docs periodically

---

**Good documentation is a superpower. Use it wisely!** 📚✨
