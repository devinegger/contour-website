Form controls follow one rule: the label always sits above the input — never a placeholder standing in for a label. Borders are minimal; focus brings a teal border.

```jsx
<Field label="Name" htmlFor="name" required>
  <Input id="name" name="name" autoComplete="name" />
</Field>
<Field label="What are you working with?" htmlFor="situation" optional>
  <Select id="situation">
    <option value="">Select one…</option>
    <option>WordPress</option>
  </Select>
</Field>
<Field label="Tell us about your situation" htmlFor="msg" optional>
  <Textarea id="msg" placeholder="What would a win look like?" />
</Field>
```

Set `onLight` on `<Field>` when the form sits on a stone surface. `Input`, `Select`, and `Textarea` are thin styled wrappers around native elements — all native attributes pass through.
