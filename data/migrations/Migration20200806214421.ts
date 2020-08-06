import { Migration } from 'mikro-orm';

export class Migration20200806214421 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "carousels" drop constraint if exists "carousels_type_check";');
    this.addSql('alter table "carousels" alter column "type" type text using ("type"::text);');
    this.addSql('alter table "carousels" add constraint "carousels_type_check" check ("type" in (\'tape\'));');
  }

}
