import { faker } from "@faker-js/faker";

export const API_USER_DATA = {
  USER_NAME: "morpheus",
  JOB_TITLE: "leader",
  USER_EMAIL: "eve.holt@reqres.in",
  USER_PASSWORD: "pistol",
  LOGIN_PASSWORD: "cityslicka",
};

export const RESPONSE = {
  STATUS: {
    OK_200: 200,
    OK_201: 201,
    OK_204: 204,
    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404,
  },
  MESSAGE: {
    NOT_FOUND: "Not Found",
    BAD_REQUEST: "Bad Request",
    Missing_password: "Missing password",
    Missing_email_or_username: "Missing email or username",
  },
};


export const randomName = faker.name.fullName();
export const randomJobTitle = faker.name.jobTitle();
export const randomEmail = faker.internet.email();
export const randomPassword = faker.internet.password();