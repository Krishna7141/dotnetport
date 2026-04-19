# Contributing to Krishna's Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## ?? How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser/device information

### Suggesting Enhancements

We welcome enhancement suggestions! Please create an issue with:
- Clear description of the enhancement
- Use case/benefit
- Proposed implementation (optional)

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/Krishna7141/dotnetport.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the code style
   - Test thoroughly
   - Update documentation if needed

4. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Use a clear title
   - Describe your changes
   - Reference related issues

## ?? Commit Message Guidelines

We follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat: add dark mode toggle
fix: resolve mobile menu animation
docs: update installation instructions
style: format code with prettier
```

## ?? Code Style

### JavaScript/React
- Use functional components with hooks
- Follow React best practices
- Use meaningful variable names
- Add comments for complex logic
- Keep components focused and small

### CSS/Tailwind
- Use Tailwind utilities first
- Create custom classes only when needed
- Follow mobile-first approach
- Keep specificity low

### File Organization
```
src/
??? Components/     # React components (PascalCase)
??? assets/        # Images, icons, etc.
??? utils/         # Helper functions
??? styles/        # Global styles
```

## ?? Testing

Before submitting:
1. Test on multiple browsers
2. Test on mobile devices
3. Check console for errors
4. Verify accessibility
5. Test all links and forms

## ?? Documentation

When adding features:
- Update README.md if needed
- Add JSDoc comments to functions
- Update CHANGELOG.md
- Include examples in documentation

## ?? Code Review Process

1. Maintainer reviews PR
2. Feedback provided if needed
3. Changes requested or approved
4. Merged to main branch

## ? Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## ?? Priority Areas

We especially welcome contributions in:
- Performance optimization
- Accessibility improvements
- Mobile responsiveness
- Animation enhancements
- Documentation
- Bug fixes

## ? Questions?

Feel free to:
- Create a discussion
- Open an issue
- Contact via email: kvchelluboina@gmail.com

## ?? License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing! ??**
