/* tslint:disable:max-classes-per-file */

// NOTE: all specifications in one file because of circular dependencies!!

import ISpecification from "./ISpecification";

export abstract class CompositeSpecification<T> implements ISpecification<T> {
  public abstract isSatisfiedBy(candidate: T): boolean;

  public and = (other: ISpecification<T>) => {
    return new AndSpecification(this, other);
  };

  public or = (other: ISpecification<T>) => {
    return new OrSpecification<T>(this, other);
  };

  public not = () => {
    return new NotSpecification<T>(this);
  };
}

export class NotSpecification<T> extends CompositeSpecification<T> {
  constructor(
    private readonly wrapped: ISpecification<T>,
  ) {
    super();
  }

  public isSatisfiedBy = (candidate: T) => {
    return !this.wrapped.isSatisfiedBy(candidate);
  };
}

export class AndSpecification<T> extends CompositeSpecification<T> {
  constructor(
    private readonly left: ISpecification<T>,
    private readonly right: ISpecification<T>,
  ) {
    super();
  }

  public isSatisfiedBy = (candidate: T) => {
    return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
  };
}

export class OrSpecification<T> extends CompositeSpecification<T> {
  constructor(
    private readonly left: ISpecification<T>,
    private readonly right: ISpecification<T>,
  ) {
    super();
  }

  public isSatisfiedBy = (candidate: T) => {
    return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);
  };
}
