import { Migration } from 'mikro-orm';

export class Migration20200809165810 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "carousels" ("id" serial primary key, "name" varchar(255) not null, "type" text check ("type" in (\'tape\')) not null, "audio_id" int4 null);');
    this.addSql('create index "carousels_name_index" on "carousels" ("name");');
    this.addSql('alter table "carousels" add constraint "carousels_audio_id_unique" unique ("audio_id");');

    this.addSql('create table "files" ("id" serial primary key, "name" varchar(255) not null, "type" varchar(255) not null, "data" text not null);');
    this.addSql('create index "files_name_index" on "files" ("name");');

    this.addSql('create table "items" ("id" serial primary key, "name" varchar(255) not null, "carousel_id" int4 not null);');

    this.addSql('alter table "carousels" add constraint "carousels_audio_id_foreign" foreign key ("audio_id") references "files" ("id") on update cascade on delete set null;');

    this.addSql('alter table "items" add constraint "items_carousel_id_foreign" foreign key ("carousel_id") references "carousels" ("id") on update cascade;');
  }

}
