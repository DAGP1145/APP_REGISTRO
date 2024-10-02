import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginprofePage } from './loginprofe.page';
import { Component } from '@angular/core';

describe('LoginprofePage', () => {
  let component: LoginprofePage;
  let fixture: ComponentFixture<LoginprofePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



