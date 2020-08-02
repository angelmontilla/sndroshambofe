import { ClassUuid } from './class-uuid';

describe('ClassUuid', () => {
  it('should create an instance', () => {
    expect(new ClassUuid()).toBeTruthy();
  });

  it ('must have 36 lenght', () => {
    const u: ClassUuid = new ClassUuid();
    console.log(u);
    expect(u.UUID.length).toBe(36);
  });
});
