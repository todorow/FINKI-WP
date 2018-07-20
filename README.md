# Lab 01 and Lab 02

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Laboratory requirements :

### LV01 - Angular Master/Details 

**Упатство за изработка:**  

1. Креирајте нов проект во **Downloads** со командата **C:\working\node\ng new lab1** 

2. Отворете **Command Prompt** и навигирајте на локацијата каде е кpериран проектот и стартувајте ја апликацијата **(C:\working\node\ng serve -o)** 

3. Отворете ја локацијата со **IntelliJ**  
 

4. Во **src/app** креирајте фолдер model и во него криерајте нова TypeScript класа **(C:\working\node\ng g class Student)**  

5. За студентите треба да се зачува: Име, Презиме, Индекс и Насока. 

6. Во **src/app** креирајте нов сервис за управување со информациите на студентите: **C:\working\node\ng g service StudentManagement** 

7. Во сервисот креирајте метод кој ќе врати низа од 4 студенти.  

8. Во **AppComponent** вклучете го StudentManagement сервисот  

9.  иницијализацијата на AppComponent, повикајте го методот од сервисот кој го креиравте и превземете ја низата со студентите во променлива од компонентата 

10. Креирајте нова компонента за деталите на студентот на локација **src/app/ (ng g component StudentDetails)** 

11. Компонентата треба да ги прикаже деталите за студентот кој е проследен како **[student]="currentStudent"** 

12. Додадете ја компонентата во темплејтот **app.component.html** 

13. Со користење на ```*ngFor``` директивата, прикажете ги студентите кои се превземени од сервисот. Прикажете само име и презиме  

14. При клик на некој од студентите, треба да се прикажат неговите детали преку ```<app-student-details>``` компонентата која претходно е додадена во темплејтот **app.component.html** 

### LV02 - Students editing

**Упатство за изработка:** 

1. Конфигурирајте различни патеки за секоја компонента (Routing) 

	1. Листата на студенти треба да ја покажува на патеката **/list.** Ова е предефинираната патака во апликацијата 

 		* Компонентата која ја прикажува листата на студенти треба да содржи копче за креирање на нов студент.  
 

 		* При клик на студент, се прикажуваат неговите детали 

	2. Деталите за студентот треба да се прикажат на патеката **/detais/:index** 

		* Оваа компонента треба да содржи копче кое ќе носи на уредување на студентот 
 

	3. Нов студент треба да се додава на патеката **/new** 

	4. Уредување на студентите треба да се прави на патеката **/edit/:index** 

		* По зачувувањето на промената или новиот студент, треба да се прикаже листата со студенти 
 

2. Додадете ги соодветните потребни методи во **StudentManagement** сервисот и променете ги постоечките да го користат **Promise** API-то.  

3. Креирајте компонента во која ќе може да се променат сите полиња за студентот.  

	1. Користете **Reactive Forms** за дефинирање на формите.  
 

		* Додадете валидатори за името и презимето да бидат задолжителни со должина помеѓу 2 и 30 карактери 
 

		* Додадете валидација за индексот да биде 6 цифри 
 

		* Додадете валидација насоката да биде една од кратенките за насоките на ФИНКИ 
 

	2. Компонентата треба да може да се користи за додавање на нов студент и уредување на тековен студент 
