import * as S from "./index.styles";
import React from "react";

export type RowKey<T> = (row: T, index: number) => string | number;

export type Column<T> = {
  id: string;
  header: React.ReactNode;
  width?: number;
  accessor?: (row: T, index: number) => React.ReactNode; // 셀 렌더러
};

export type ColumnGroup<T> = {
  id: string;
  header: React.ReactNode;
  columns: Column<T>[];
};

export type DataTableProps<T> = {
  data: T[];
  columns: Array<Column<T> | ColumnGroup<T>>;
  getRowKey?: RowKey<T>;
  onRowClick?: (row: T) => void;
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
  stickyHeader?: boolean;
  zebra?: boolean;
  compact?: boolean;
};

function isGroup<T>(col: Column<T> | ColumnGroup<T>): col is ColumnGroup<T> {
  return (col as ColumnGroup<T>).columns !== undefined;
}

export function DataTable<T>({
  data,
  columns,
  getRowKey = (_, i) => i,
  onRowClick,
  topLeft,
  topRight,
  stickyHeader = true,
  zebra = false,
  compact = false,
}: DataTableProps<T>) {
  const leafColumns: Column<T>[] = React.useMemo(() => {
    const buf: Column<T>[] = [];
    columns.forEach((c) => {
      if (isGroup<T>(c)) buf.push(...c.columns);
      else buf.push(c);
    });
    return buf;
  }, [columns]);

  const hasGroup = columns.some(isGroup);

  return (
    <>
      {(topLeft || topRight) && (
        <S.TableInfoRow>
          <div>{topLeft}</div>
          <S.TableRight>{topRight}</S.TableRight>
        </S.TableInfoRow>
      )}

      <S.TableWrapper>
        <S.StyledTable $compact={compact} $zebra={zebra}>
          <thead>
            {/* 1행: 일반 컬럼(rowSpan=2) + 그룹 헤더(colSpan=서브수) */}
            <tr>
              {columns.map((c) =>
                isGroup<T>(c) ? (
                  <S.TH
                    key={c.id}
                    colSpan={c.columns.length}
                    $sticky={stickyHeader}
                    style={{ textAlign: "center" }}
                  >
                    {c.header}
                  </S.TH>
                ) : (
                  <S.TH
                    key={c.id}
                    rowSpan={hasGroup ? 2 : 1}
                    $sticky={stickyHeader}
                    style={{ width: c.width }}
                  >
                    {c.header}
                  </S.TH>
                )
              )}
            </tr>

            {/* 2행: 그룹의 서브헤더만 */}
            {hasGroup && (
              <tr>
                {columns.flatMap((c) =>
                  isGroup<T>(c)
                    ? c.columns.map((sc) => (
                        <S.TH
                          key={`${c.id}__${sc.id}`}
                          $sticky={stickyHeader}
                          style={{ width: sc.width, textAlign: "center" }}
                        >
                          {sc.header}
                        </S.TH>
                      ))
                    : []
                )}
              </tr>
            )}
          </thead>
          <tbody>
            {data.map((row, ri) => {
              const key = getRowKey(row, ri);
              return (
                <S.TR
                  key={key}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  $clickable={!!onRowClick}
                >
                  {leafColumns.map((c) => (
                    <S.TD key={`${key}__${c.id}`}>
                      {c.accessor ? c.accessor(row, ri) : null}
                    </S.TD>
                  ))}
                </S.TR>
              );
            })}
          </tbody>
        </S.StyledTable>
      </S.TableWrapper>
    </>
  );
}
