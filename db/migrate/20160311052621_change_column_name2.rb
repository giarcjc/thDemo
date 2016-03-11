class ChangeColumnName2 < ActiveRecord::Migration
  def change
  	rename_column :users, :valid, :agreed_terms
  end
end
