describe('Student', () => {
  describe('new Student()', () => {
    it('takes a value for the name', () => {
      student = new Student("John")
      expect(student).toBeDefined()
      expect(student.name).toEqual("John")
    })
  })
})
